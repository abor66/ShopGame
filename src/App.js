import React, { useState, useEffect } from 'react'
import QrReader from 'react-qr-reader'
import { getDeviceId, getFacingModePattern } from './getDeviceId'
import GetItemData from './GetItemData';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
//Google font loader
import GoogleFontLoader from 'react-google-font-loader';

// const { getDeviceId, getFacingModePattern } = require('./getDeviceId')
const useStyles = makeStyles((theme) => ({
  root: {
    height: 300,
    flexGrow: 1,
    minWidth: 400,
    transform: 'translateZ(0)',
    // The position fixed scoping doesn't work in IE 11.
    // Disable this demo to preserve the others.
    '@media all and (-ms-high-contrast: none)': {
      display: 'none',
    },
  },
  modal: {
    display: 'flex',
    padding: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    // fontFamily: "Codystar",
    font: 'Codystar',
    margin: "0 auto",
    width: 400,
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "black",
    border: '2px solid pink',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  h1: {
    fontFamily: "Codystar",
    color: "white",
    backgroundColor: "black"
  }

}));

export default function App1() {
  const classes = useStyles();
  const [state, setState] = useState({});
  const [open, setOpen] = useState(false);
  const [openScanner, setOpenScanner] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);
  const [openNewItem, setOpenNewItem] = useState(false);
  const [openMission, setOpenMission] = useState(false);
  const [shopCar, setShopCar] = useState([]);
  console.log('shopcar', shopCar);
  //data schema : Name,Price,Count,Image_Url
  const handleScan = data => {
    if (data) {
      setOpen(true);
      console.log('data', data)
      // setState(data);
      const keyValue = JSON.parse(data);
      // const kVtoArray = Object.values(keyValue);

      // console.log('keyValue', keyValue);
      setState(keyValue)
      console.log('state', state)
    }
  }
  const handleError = err => {
    console.error(err)
  }
  const allItemsSum = () => {
  }
  const handleClose = () => {
    setOpen(false)
    setOpenScanner(false)
    setOpenHelp(false)
    setOpenNewItem(false)
    setOpenMission(false)
  }
  const handelOpenScan = () => {
    setOpenScanner(true)
  }
  const handelOpenHelp = () => {
    setOpenHelp(true)
  }
  const handelNewItem = () => {
    setOpenNewItem(true)
  }
  const handelMission = () => {
    setOpenMission(true)
  }
  const handleBuying = () => {
    setOpen(false);
    setShopCar(prevState => {
      return {
        ...prevState, state
      }
    })
  }
  return (
    <div>
      <GoogleFontLoader
        fonts={[
          {
            font: 'Codystar',
            weights: [400, '400i'],
          },
        ]}
        subsets={['cyrillic-ext', 'greek']}
      />
      <Button variant="contained" color="secondary"
        onClick={() => {
          handelOpenScan()
        }}
      >掃描商品條碼</Button>
      <Button variant="contained" color="secondary"
        onClick={() => {
          handelMission()
        }}
      >領取任務</Button>
      <Button variant="contained" color="secondary"
        onClick={() => {
          handelNewItem()
        }}
      >輸入商品</Button>
      <Button variant="contained" color="secondary"
        onClick={() => {
          handelOpenHelp()
        }}
      >遊戲說明？</Button>
      <Modal
        open={openScanner}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan
          }
          style={{ width: '60%' }}
        />
      </Modal>
      <div className={classes.root} style={{ border: "5px solid black" }}>
        <div style={{ border: "5px solid black", backgroundColor: "black" }}><a style={{ color: "white" }}>& 收銀機 &</a></div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className={classes.paper} style={{ border: "5px solid pink" }}>
            {Object.keys(state).map((item, idx) => (
              <div key={idx} >
                {item === 'image_url' ? null : <h3 className={classes.h1}>{item}:{state[item]}</h3>}
                {item === 'image_url' ? <TextareaAutosize
                  rowsMax={4}
                  aria-label="maximum height"
                  placeholder="Maximum 4 rows"
                  defaultValue={state.image_url}
                /> : null}
                <p> {item === 'image_url' ? <img src={state.image_url} width='300px' /> : null} </p>
              </div>))}
            <Button color="primary" variant="contained" color="primary" onClick={() => handleBuying()}>購買</Button>
          </div>
        </Modal>
      </div>
      <div>
        <Modal
          open={openMission}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className={classes.modal}>
            <div className={classes.paper} style={{ color: "white", minHeight: "250px" }}>
              新任務：            </div>
          </div>
        </Modal>
      </div>
      <div>
        <Modal
          open={openNewItem}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className={classes.modal}>
            <div className={classes.paper} style={{ color: "white", minHeight: "250px" }}>
              輸入新商品：            </div>
          </div>
        </Modal>
      </div>
      <Modal
        open={openHelp}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.modal}>
          <div className={classes.paper} style={{ color: "white", minHeight: "250px" }}>
            遊戲說明：領取任務，將任務單列出的商品條碼都掃描進入購物車後，進行結帳即完成任務
            </div>
        </div>
      </Modal>
    </div>

  )

}
