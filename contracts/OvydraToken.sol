// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract OvydraToken is ERC20, ERC20Burnable, Ownable {
    uint256 public constant MAX_SUPPLY = 200_000_000 * 10 ** 18;
    uint256 public constant MAX_FEE_BPS = 300;

    uint256 public feeBps;
    address public feeRecipient;
    mapping(address => bool) public isFeeExempt;

    constructor(address _feeRecipient, uint256 _initialFeeBps)
        ERC20("OVYDRA", "OVR")
        Ownable(msg.sender)
    {
        require(_feeRecipient != address(0), "Invalid fee recipient");
        require(_initialFeeBps <= MAX_FEE_BPS, "Fee too high");

        feeRecipient = _feeRecipient;
        feeBps = _initialFeeBps;

        isFeeExempt[msg.sender] = true;
        isFeeExempt[_feeRecipient] = true;

        _mint(msg.sender, MAX_SUPPLY);
    }

    function setFeeRecipient(address _feeRecipient) external onlyOwner {
        require(_feeRecipient != address(0), "Invalid fee recipient");
        feeRecipient = _feeRecipient;
    }

    function setFeeBps(uint256 _feeBps) external onlyOwner {
        require(_feeBps <= MAX_FEE_BPS, "Fee too high");
        feeBps = _feeBps;
    }

    function setFeeExempt(address account, bool exempt) external onlyOwner {
        isFeeExempt[account] = exempt;
    }

    function _update(address from, address to, uint256 value) internal override {
        if (from == address(0) || to == address(0) || feeBps == 0) {
            super._update(from, to, value);
            return;
        }

        if (isFeeExempt[from] || isFeeExempt[to]) {
            super._update(from, to, value);
            return;
        }

        uint256 fee = (value * feeBps) / 10_000;
        uint256 amountAfterFee = value - fee;

        if (fee > 0) {
            super._update(from, feeRecipient, fee);
        }
        super._update(from, to, amountAfterFee);
    }
}
