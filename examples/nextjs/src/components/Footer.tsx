'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/Modal';

export function Footer() {
    // Modal state for each button
    const [isRewardsModalOpen, setRewardsModalOpen] = useState(false);
    const [isAboutModalOpen, setAboutModalOpen] = useState(false);
    const [isTermsModalOpen, setTermsModalOpen] = useState(false);
    const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false);
    const [isGetFundsModalOpen, setGetFundsModalOpen] = useState(false);

    return (
        <footer className="flex flex-col justify-center items-center p-4 bg-neutral-900 text-neutral-800 border-t border-gray-700 relative">
            {/* Links */}
            <div className="flex justify-center items-center space-x-6 mb-4">
                <button
                    onClick={() => setRewardsModalOpen(true)}
                    className="px-3 hover:text-white !text-neutral-600 text-lg"
                >
                    Rewards
                </button>
                <button
                    onClick={() => setAboutModalOpen(true)}
                    className="px-3 hover:text-white !text-neutral-600 text-lg"
                >
                    About
                </button>
                <button
                    onClick={() => setTermsModalOpen(true)}
                    className="px-3 hover:text-white !text-neutral-600 text-lg"
                >
                    Terms & Conditions
                </button>
                <button
                    onClick={() => setPrivacyModalOpen(true)}
                    className="px-3 hover:text-white !text-neutral-600 text-lg"
                >
                    Privacy Policy
                </button>
                <button
                    onClick={() => setGetFundsModalOpen(true)}
                    className="px-3 hover:text-white !text-neutral-600 text-lg"
                >
                    Get Funds
                </button>
            </div>

            {/* "Powered by Azuro" text */}
            <div className="text-neutral-600 text-sm mt-3 mb-1">
                Powered by Azuro
            </div>

            {/* Modal for Rewards */}
            <Modal isOpen={isRewardsModalOpen} onClose={() => setRewardsModalOpen(false)}>
                <h2 className="text-2xl font-bold mb-4">Rewards</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>✨ Win: 0.25% to 1%</li>
                    <li>✨ Every loss above 1K USDT: Win 5 USDT</li>
                    <li>✨ Every loss above 100 USDT: Win 0.5 USDT</li>
                    <li>✨ Every loss above 10 USDT: Win 0.025 USDT</li>
                </ul>
                <p className="text-md">
                    These rewards will be aggregated and transferred at the beginning of every month. Promotions may change monthly.
                </p>
            </Modal>

            {/* Modal for About */}
            <Modal isOpen={isAboutModalOpen} onClose={() => setAboutModalOpen(false)}>
                <h2 className="text-2xl font-bold mb-4">About</h2>
                <p className="text-md">
                    4CastMarket is currently an Azuro Protocol front-end. When you bet, your money is locked into the Azuro smart contracts with pre-determined outcomes. Once the game/event finishes, the contract allows you to redeem your winnings (if you won).
                    <br /><br />
                    We are developing a peer-to-peer secondary prediction market so that users can trade outcomes against each other instead of interacting with the liquidity in the Azuro protocol. Future plans include an online casino and a cardroom.
                </p>
            </Modal>

            {/* Modal for Terms & Conditions */}
            <Modal isOpen={isTermsModalOpen} onClose={() => setTermsModalOpen(false)}>
                <h2 className="text-2xl font-bold mb-4">Terms & Conditions</h2>
                <div className="text-md h-[70vh] overflow-y-auto">
                    <p>
                        THIS AGREEMENT GOVERNS YOUR RELATIONSHIP WITH 4Cast (HEREINAFTER REFERRED TO AS "FRONTENDER") AND USE OF THE 4CastMarket.com WEBSITE ("WEBSITE"). YOU MAY USE THIS WEBSITE ON THE CONDITION THAT YOU ACCEPT ALL OF THE TERMS AND CONDITIONS CONTAINED HEREIN. PLEASE READ THESE TERMS CAREFULLY BEFORE USING THIS WEBSITE. USING THIS WEBSITE INDICATES THAT YOU ACCEPT THESE TERMS.
                    </p>
                    <br />
                    <h3 className="font-bold">General Terms and Acceptance of this Agreement</h3>
                    <p>
                        1. The FRONTENDER makes this Website as an interface for access to the relevant smart-contract available through the Website subject to the terms and conditions set forth. By accessing and using this Website, interacting with the smart-contract through this Website, or clicking "I agree with the Terms of Use," you agree to be bound by these terms.
                        <br /><br />
                        2. By using this Website, you enter into a contract with 4Cast and agree to be bound by:
                        <ul className="list-disc pl-6">
                            <li>These Terms & Conditions</li>
                            <li>Our Privacy Policy</li>
                            <li>Our Cookies Policy</li>
                            <li>Any game rules and limits specific to the services provided</li>
                        </ul>
                        <br />
                        3. In some countries, online betting is prohibited by law. You are responsible for ensuring the legality of online gambling in your jurisdiction. The FRONTENDER is not responsible for unauthorized or illegal use of our services.
                        <br /><br />
                        4. The FRONTENDER does not allow users from restricted countries such as the United States, Russia, China, and Turkey. Using a VPN or proxy to bypass restrictions is prohibited.
                        <br /><br />
                        5. You confirm you are over 18 years old or the legal age required in your jurisdiction to use the services.
                    </p>
                    <br />
                    <h3 className="font-bold">Bets and Cryptocurrency Transactions</h3>
                    <p>
                        1. To place bets, you need a decentralized crypto wallet with funds (ERC-20 tokens). You must connect your wallet to the Website to place bets.
                        <br /><br />
                        2. You agree that all funds on your wallet are your personal funds and not of illegal origin. You cannot reverse transactions or decline payments made.
                    </p>
                    <br />
                    <h3 className="font-bold">Refund Policy</h3>
                    <p>
                        Our betting offers are provided for entertainment only. Any stakes placed on a bet are non-refundable as the product is virtual and instantly staked.
                    </p>
                    <br />
                    <h3 className="font-bold">Conspiracy, Misleading Actions, Fraud, and Criminal Activity</h3>
                    <p>
                        Fraudulent activities, including using bots or malicious programs, are strictly prohibited.
                    </p>
                    <br />
                    <h3 className="font-bold">Limitation of Our Liability</h3>
                    <p>
                        You use this Website at your own risk. The FRONTENDER is not liable for any damages resulting from your use of this Website, except as required by law.
                    </p>
                    <br />
                    <h3 className="font-bold">Change of Conditions</h3>
                    <p>
                        The FRONTENDER reserves the right to modify these terms without prior notice. Continued use of the Website constitutes your acceptance of these changes.
                    </p>
                    <br />
                    {/* Add all other sections as provided in your document */}
                </div>
            </Modal>

            {/* Modal for Privacy Policy (Formatted) */}
            <Modal isOpen={isPrivacyModalOpen} onClose={() => setPrivacyModalOpen(false)}>
                <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
                <p className="text-md mb-4">
                    Please carefully read this Privacy Policy ("Policy") which governs how 4Cast ("Platform", "we", or "Frontender") collects, uses, and discloses information when you access or use the website 4CastMarket.com (the "Website") or when you otherwise interact with us. At 4Cast, we are committed to protecting the privacy of our users. This Policy outlines how we collect, use, and disclose personal information when you interact with the decentralized protocol using the 4CastMarket.com interface.
                </p>
                <h3 className="text-xl font-semibold mb-2">Information</h3>
                <p className="text-md mb-4">
                    The data controller of the data collected through the Website is the Frontender of 4Cast. We collect information that you provide to us when you use our Platform, such as your wallet address. We may also collect information about your use of our Platform, including your betting history, IP address, and device information.
                </p>
                <h3 className="text-xl font-semibold mb-2">How We Use Your Information</h3>
                <p className="text-md mb-4">
                    We use your information to provide and improve our services, communicate with you about our Platform and promotions, and comply with legal obligations. We may also use your information to personalize your experience on our Platform and to analyze and improve our efficiency.
                </p>
                <h3 className="text-xl font-semibold mb-2">Security Measures</h3>
                <p className="text-md mb-4">
                    We take reasonable measures to protect your information from unauthorized access, use, and disclosure. However, we cannot guarantee the security of your information as no method of transmission over the Internet is completely secure.
                </p>
                <h3 className="text-xl font-semibold mb-2">Your Rights</h3>
                <p className="text-md mb-4">
                    You have the right to access, update, and delete your personal information, as well as to object to or restrict certain processing of your information. You also have the right to withdraw your consent at any time where applicable. Please contact us on our socials to exercise these rights.
                </p>
                <h3 className="text-xl font-semibold mb-2">Cookies and Similar Technologies</h3>
                <p className="text-md mb-4">
                    We use cookies and similar technologies to collect information about your use of our Platform and to personalize your experience. You can manage your cookie preferences through your browser settings.
                </p>
                <h3 className="text-xl font-semibold mb-2">Changes to This Policy</h3>
                <p className="text-md mb-4">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes to the Policy by posting the new Policy on our Platform.
                </p>
                <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                <p className="text-md">
                    If you have any questions or concerns about our Privacy Policy, please reach out to us on our Discord handle.
                </p>
            </Modal>

            {/* Modal for Get Funds */}
            <Modal isOpen={isGetFundsModalOpen} onClose={() => setGetFundsModalOpen(false)}>
                <h2 className="text-2xl font-bold mb-4">How to Get Funds?</h2>
                <p className="text-md">
                    Betting on 4Cast on Polygon happens in USDT which is a stablecoin pegged to the US dollar. To make bets you will also need some POL for paying gas transactions.
                    <br /><br />
                    Make sure to connect your metamask or other wallets and switch to the Polygon network. Make sure you have USDT and some POL for transaction fees.
                    <br /><br />
                    You can purchase USDT and POL from a centralized exchange such as Binance and transfer it to your decentralized wallet address.
                </p>
            </Modal>
        </footer>
    );
}

export default Footer;
