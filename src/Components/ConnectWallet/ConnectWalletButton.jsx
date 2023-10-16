import React, { useState } from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { useAccount, useDisconnect } from "wagmi";
import { copyTextToClipboard, formatAddress } from "../../utility/helpers";
import PopUp from "./ConnectWalletModal";

const CopyPopup = () => (
  <div
    class="
          absolute -bottom-10
          bg-primary
          px-6
          py-2.5
          font-medium
          text-xs
          leading-tight
          rounded
          shadow-md
          transition
          duration-150
          ease-in-out
          "
  >
    copied!!
  </div>
);

const ConnectWalletButton = () => {
  // States
  const [modal, setModal] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  //Getting required data for UI
  const { address, isConnecting, isConnected, isDisconnected } = useAccount({});
  const { disconnect } = useDisconnect();

  //Actions
  const togglePopUp = () => setModal(!modal);

  const closeModal = () => {
    setModal(false);
  };

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(address)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {modal ? <PopUp onClose={closeModal} /> : ""}

      <button
        onClick={() => {
          //Popup should only open when disconnected
          if (isDisconnected) togglePopUp();
        }}
        className="w-full mr-6 bg-primary text-dark p-3 rounded-full text-lg text-center cursor-pointer 
        flex justify-evenly items-center relative"
      >
        {isConnecting
          ? "Connecting..."
          : isConnected
          ? formatAddress(address)
          : "Connect Wallet"}

        {isConnected ? (
          <button
            onClick={() => {
              handleCopyClick();
            }}
            disabled={isCopied}
          >
            <AiOutlineCopy />
          </button>
        ) : undefined}

        {isCopied ? <CopyPopup /> : undefined}
      </button>

      {/*Only show disconnect button if user is connected */}
      {isConnected ? (
        <>
          <button
            className="w-full mr-6 bg-primary text-dark p-3 rounded-full text-lg text-center cursor-pointer"
            onClick={() => {
              disconnect();
            }}
          >
            Disconnect
          </button>
        </>
      ) : undefined}
    </>
  );
};

export default ConnectWalletButton;
