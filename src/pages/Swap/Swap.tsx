import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLayerGroup, faCaretDown, faCaretRight, faArrowDown, faCog } from "@fortawesome/free-solid-svg-icons";
import { COINSFROM, COINSFTO } from "const/Consts";
import "./Swap.scss";

export default function Swap() {
  const [openSelectFrom, setOpenSelectFrom] = useState(false);
  const [openSelectTo, setOpenSelectTo] = useState(false);
  const [coinFrom, setCoinFrom] = useState('USDT');
  const [coinTo, setCoinTo] = useState("ALGO");
  const [openSettingModal, setOpenSettingModal] = useState(false);
  return (
    <div className="swap_form mt-[150px]">
      <div className="swap_form_content w-[90%] md:w-[600px]">
        <div className="swap_form_content_top">
          <div className="swap_control_left">
            <span>Swap</span>
        </div>
          <div className="swap_contol_right">
            <div className="icon" onClick={()=>{setOpenSettingModal(!openSettingModal)}}>
              <FontAwesomeIcon icon={faLayerGroup} color="white" size="xl" />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faClock} color="white" size="xl" />
            </div>
          </div>
        </div>
        <div className="swap_form_content_inner_form">
          <div className='form'>
            <label htmlFor="">From</label>
            <div className='form_content'>
              <input type="number" className='form_content_input' placeholder='0' min={0} />
              <div className="form_content_select">
                <div className="select_header" onClick={() => setOpenSelectFrom(!openSelectFrom)}>
                  <span>{coinFrom}</span>
                  <FontAwesomeIcon icon={openSelectFrom === true ? faCaretDown : faCaretRight} color="white" size="sm" className="icon" />
                </div>
                <div className="select_content" style={{ display: openSelectFrom ? "" : "none" }}>
                  <ul>
                    {COINSFROM.map((coin, ind) => {
                      return (
                        <li key={ind} onClick={() => { setCoinFrom(coin); setOpenSelectFrom(false) }}>{coin}</li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swap_form_content_middle_bar">
          <a href="#">
            <FontAwesomeIcon icon={faArrowDown} color="white" size="lg" />
          </a>
        </div>
        <div className="swap_form_content_inner_form">
          <div className='form'>
            <label htmlFor="">To</label>
            <div className='form_content'>
              <input type="number" className='form_content_input' placeholder='0' min={0} />
              <div className="form_content_select">
                <div className="select_header" onClick={() => setOpenSelectTo(!openSelectTo)}>
                  <span>{coinTo}</span>
                  <FontAwesomeIcon icon={openSelectTo === true ? faCaretDown : faCaretRight} color="white" size="sm" className="icon" />
                </div>
                <div className="select_content" style={{ display: openSelectTo ? "" : "none" }}>
                  <ul>
                    {COINSFTO.map((coin, ind) => {
                      return (
                        <li key={ind} onClick={() => { setCoinTo(coin); setOpenSelectTo(false) }}>{coin}</li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swap_form_content_btn">
          <button>Unlock Wallet</button>
        </div>
        <div className="modal">
          <div className={openSettingModal ? "modal_setting" : "modal_setting dis-none" }>
            <div className="modal_header">
              <FontAwesomeIcon icon={faCog} color="white" size="xl" className="icon" />
              <h3>Setting</h3>
            </div>
            <div className="modal_content">
              <div className="swap_set">
                <span>Default Transaction Speed</span>
                <ul>
                  <li>standard (6)</li>
                  <li>fast (7)</li>
                  <li>instant (8)</li>
                </ul>
              </div>
              <div className="swap_set">
                <span>Slippage Tolerance</span>
                <ul>
                  <li>0.1%</li>
                  <li>0.5%</li>
                  <li>1%</li>
                  <li>10%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}