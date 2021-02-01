import React from "react";
import "./styles.css";

var flag1, flag2, flag3;
var flag6, falg5, falg4;
var datte, ndatte;

export default function App() {
  const [date, setDate] = React.useState("");
  const [optn, setOption] = React.useState();
  const [format, setForrmat] = React.useState();
  const [ndate, setnDate] = React.useState();
  var b = 1;
  var toggleElement = true;

  let pinput = document.getElementById("theNumber");
  function eventHandler(e) {
    if (e) datte = e.target.value;
    setDate(datte);
    var ymd;

    var formatteCount = 0;

    var formatte = [
      "YYYY-MM-DD",
      "YYYY-DD-MM",
      "DD-YYYY-MM",
      "YY-MM-DD",
      "YY-DD-MM",
      "DD-YY-MM"
    ];

    if (datte) ymd = datte.split("-");
    if (ndatte) ymd = ndatte.split("-");

    do {
      formatteCount++;

      if (formatteCount === 1) {
        var ymdArray = ymd.join("");

        for (
          var i = 0, j = ymdArray.length - 1;
          i < ymdArray.length / 2;
          i++, j--
        ) {
          if (ymdArray[i] === ymdArray[j]) flag1 = true;
          else {
            flag1 = false;
            break;
          }
        }
      }
      if (formatteCount === 2) {
        var swap;
        swap = ymd[2];
        ymd[2] = ymd[1];
        ymd[1] = swap;
        var ydm = ymd;

        var ydmArray = ydm.join("");

        for (
          i = 0, j = ydmArray.length - 1;
          i < ydmArray.length / 2;
          i++, j--
        ) {
          if (ydmArray[i] === ydmArray[j]) flag2 = true;
          else {
            flag2 = false;
            break;
          }
        }
      }

      if (formatteCount === 3) {
        ymd = ymd.concat(ymd.splice(0, 2));
        var myd = ymd;

        var mydArray = myd.join("");
        for (
          i = 0, j = mydArray.length - 1;
          i < mydArray.length / 2;
          i++, j--
        ) {
          if (mydArray[i] === mydArray[j]) flag3 = true;
          else {
            flag3 = false;
            break;
          }
        }
      }
      if (formatteCount === 4) {
        var yymmdd = datte.split("");

        var yymmddArray = yymmdd;
        yymmddArray.shift();
        yymmddArray.shift();
        i = 0;
        while (i < yymmddArray.length) {
          if (yymmddArray[i] === "-") {
            yymmddArray.splice(i, 1);
          } else {
            ++i;
          }
        }

        for (
          i = 0, j = yymmddArray.length - 1;
          i < yymmddArray.length / 2;
          i++, j--
        ) {
          if (yymmddArray[i] === yymmddArray[j]) falg4 = true;
          else {
            falg4 = false;
            break;
          }
        }
      }

      if (formatteCount === 5) {
        var yyddmm = datte.split("-");
        swap = yyddmm[2];
        yyddmm[2] = yyddmm[1];
        yyddmm[1] = swap;
        var yyddmmArray = yyddmm;
        yyddmmArray = yyddmmArray.join();
        var arrSplit = yyddmmArray.split("");

        arrSplit.shift();
        arrSplit.shift();
        i = 0;
        while (i < arrSplit.length) {
          if (arrSplit[i] === ",") {
            arrSplit.splice(i, 1);
          } else {
            ++i;
          }
        }
        for (
          i = 0, j = arrSplit.length - 1;
          i < arrSplit.length / 2;
          i++, j--
        ) {
          if (arrSplit[i] === arrSplit[j]) falg5 = true;
          else {
            falg5 = false;
            break;
          }
        }
      }
      if (formatteCount === 6) {
        var ddyymm = datte.split("");

        ddyymm.shift();
        ddyymm.shift();
        i = 0;
        while (i < ddyymm.length) {
          if (ddyymm[i] === "-") {
            ddyymm.splice(i, 1);
          } else {
            ++i;
          }
        }

        ddyymm = ddyymm.concat(ddyymm.splice(0, 4));
        for (i = 0, j = ddyymm.length - 1; i < ddyymm.length / 2; i++, j--) {
          if (ddyymm[i] === ddyymm[j]) flag6 = true;
          else {
            flag6 = false;
            break;
          }
        }
      }
    } while (formatteCount < 10);

    if (flag1 === true) {
      setOption(true);
      setForrmat(formatte[0]);
      b = 10000;
    } else if (flag2 === true) {
      setOption(true);
      setForrmat(formatte[1]);
      b = 10000;
    } else if (flag3 === true) {
      setOption(true);
      setForrmat(formatte[2]);
      b = 10000;
    } else if (falg4 === true) {
      setOption(true);
      setForrmat(formatte[3]);
      b = 10000;
    } else if (falg5 === true) {
      setOption(true);
      setForrmat(formatte[4]);
      b = 10000;
    } else if (flag6 === true) {
      setOption(true);
      setForrmat(formatte[5]);
      b = 10000;
    } else {
      setOption(false);
    }
    console.log(optn);
  }
  function clickHandler() {
    do {
      if (toggleElement === true) {
        toggleElement = false;
        pinput.stepDown(b);
      } else {
        toggleElement = true;
        pinput.stepUp(b);
      }
      b++;
      // console.log(pinput.value);
      setnDate(pinput.value);
      ndatte = pinput.value;
      eventHandler();
    } while (b < 3650);
  }

  return (
    <div className="App">
      {/* <Img id="tenet" className="rotate" /> */}
      <h1>Panildrome dates</h1>
      <input type="date" onChange={eventHandler} id="theNumber" />
      <br />
      <br />
      <h2> Date : {date} </h2>
      <br />
      <div>
        {/* <img
          src="https://img.mensxp.com/media/content/2020/Sep/image-1_5f4e15f55347e.gif"
          alt="loading"
          width="250"
        /> */}
      </div>

      {!optn && (
        <h1>
          Panildrome possible {format} : No
          <br />
          <input
            type="button"
            id="theButton"
            defaultValue="Check nearest panildrome"
            onClick={clickHandler}
          />
        </h1>
      )}

      {optn && (
        <h1>
          <h4> Panildrome date : {ndate} </h4>
          Panildrome possible {format} : Yes
        </h1>
      )}
    </div>
  );
}
