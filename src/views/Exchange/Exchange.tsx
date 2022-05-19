import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { Informative } from "../../components/modals/Informative/Informative";
import { Web3Context } from "../../contexts/Web3/Web3Context";
import { useEventsProvider } from "../../hooks/useEventsProvider";
import { useReserves } from "../../hooks/useReserves";
import { getConnected, web3Provider } from "../../utils/web3";
import { BarButtons } from "./components/BarButtons/BarButtons.";
import { Liquidity } from "./components/Liquidity/Liquidity";
import { Swap } from "./components/Swap/Swap";
import classes from "./exchange.module.scss";

export const Exchange = () => {
  const { web3, handleWeb3, handleAccount, handleChainId } =
    useContext(Web3Context);
  const [active, setActive] = useState("Swap");
  const [slipage, setSlipage] = useState(10);
  const [open, setOpen] = useState(false);
  const { accountsChanged, chainChanged } = useEventsProvider(
    handleAccount,
    handleChainId
  );

  const [openConfModal, setOpenConfModal] = useState(false);
  const [paper, setPaper] = useState(false);

  const { reserves, handleReserves } = useReserves();
  useEffect(() => {
    handleReserves();
  }, []);

  const handleSlipage = (e: any): void => {
    setSlipage(e.target.value);
  };

  useEffect(() => {
    web3Provider(handleWeb3, "metamask", false);
    getConnected().then(
      (response: any) =>
        response && handleWeb3(response.provider, response.providerString)
    );
  }, [handleWeb3]);

  useEffect(() => {
    web3.provider?.on("accountsChanged", accountsChanged);
    return () =>
      web3.provider?.removeListener("accountsChanged", accountsChanged);
  }, [handleAccount, web3.provider, accountsChanged]);

  useEffect(() => {
    web3.provider?.on("chainChanged", chainChanged);
    return () => web3.provider?.removeListener("chainChanged", chainChanged);
  }, [handleChainId, web3.provider, chainChanged]);

  return (
    <>
      <main className={classes.swap}>
        <section className={classes.exchangeMobile}>
          <div className={classes.exchangeMobile__frame}>
            <div className={classes.exchangeMobile__frameTitle}>
              <p>Calcula tus cryptomonedas</p>
              <h2>Inticoin</h2>
            </div>
            <div className={classes.exchangeMobile__frameContent}>
              <BarButtons
                active={active}
                setActive={setActive}
                slipage={slipage}
                handleSlipage={handleSlipage}
                setOpenConfModal={setOpenConfModal}
              />
              {active === "Swap" && (
                <Swap slipage={slipage} setOpen={setOpen} reserves={reserves} />
              )}
              {active === "Liquidity" && (
                <Liquidity
                  slipage={slipage}
                  setOpen={setOpen}
                  reserves={reserves}
                />
              )}
            </div>
          </div>
        </section>

        <section className={classes.exchange}>
          <div className={classes.exchange__frame}>
            <div className={classes.exchange__frameBg}>
              <Image
                src="/img/swap/swap-frame.png"
                width={80}
                height={52}
                layout="responsive"
              />
            </div>
            <div className={classes.exchange__frameMain}>
              <div className={classes.exchange__frameMain__title}>
                <p>Calcula tus cryptomonedas</p>
                <h2>Inticoin</h2>
              </div>
              <div className={classes.exchange__frameMain__content}>
                <BarButtons
                  active={active}
                  setActive={setActive}
                  slipage={slipage}
                  handleSlipage={handleSlipage}
                  setOpenConfModal={setOpenConfModal}
                />
                {active === "Swap" && (
                  <Swap
                    slipage={slipage}
                    setOpen={setOpen}
                    reserves={reserves}
                  />
                )}
                {active === "Liquidity" && (
                  <Liquidity
                    slipage={slipage}
                    setOpen={setOpen}
                    reserves={reserves}
                  />
                )}
              </div>
            </div>
          </div>
          <div className={classes.exchange__image}>
            <div>
              <Image
                src="/img/inti-img.png"
                width={50}
                height={70}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>

      <div className={classes.swapInfo}>
        <div>
          <h2>
            Damos inicio a nuestro proyecto con un inticoin token erc-20 alojada
            en la blockchain de moombeam (GLMR)
          </h2>
          <div className={classes.swapInfo__columns}>
            <div>
              <button onClick={() => setPaper(true)}>Copiar Enlace</button>
              <p>Comprar ahora en Glimmer</p>
              <p>Agregar liquidez en Glimmer</p>
            </div>
            <div>
              <button onClick={() => setPaper(true)}>Ver grafico</button>
              <p>Compruebe su glimmer</p>
              <p>Ver soporte LP</p>
            </div>
          </div>
        </div>
      </div>

      {openConfModal && (
        <Informative handleClose={() => setOpenConfModal(false)}>
          <h5>Slipage</h5>
          <hr></hr>
          <p className={classes.margin}>
            Max Slippage <span>{slipage / 10}%</span>
          </p>

          <input
            type="range"
            min="0"
            max="200"
            value={slipage}
            onChange={handleSlipage}
            className={classes.slipage}
          />
          <p className={classes.margin}>Su transacción puede ser anticipada</p>
          <div className={classes.button}>
            <button type="button" onClick={() => setOpenConfModal(false)}>
              Cerrar
            </button>
          </div>
        </Informative>
      )}
      {paper && (
        <Informative handleClose={() => setPaper(false)}>
          <span>
            <h2>Proximamente...</h2>
          </span>
        </Informative>
      )}
    </>
  );
};
