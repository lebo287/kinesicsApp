/* eslint-disable no-self-compare */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Input } from 'semantic-ui-react';
import { Grid, Image, Segment } from 'semantic-ui-react';


function Detect() {


  const navigate = useNavigate();

  const [textMessage, setTextMessage] = useState("");

const labelMap = {
  1:{name:'Good morning', color:'red'},
  2:{name:'Thank You', color:'yellow'},
  3:{name:'I Love You', color:'lime'},
  4:{name:'Hi', color:'blue'},
  5:{name:'How are you', color:'purple'},
}


// Define a drawing function
const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx) => {
  for(let i=0; i<=boxes.length; i++){
      if(boxes[i] && classes[i] && scores[i]>threshold){
          // Extract variables
          const [y,x,height,width] = boxes[i]
          const text = classes[i]

          setTextMessage(labelMap[text].name);
        
          console.log(textMessage);

          // Set styling
          ctx.strokeStyle = labelMap[text]['color']
          ctx.lineWidth = 10
          ctx.fillStyle = 'white'
          ctx.font = '30px Arial'         
          
          // DRAW!!
          ctx.beginPath()
          ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
          ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/1.5);
          ctx.stroke()
      }
  }
}
  //GETTING CURRENT ROUTE

  const location = useLocation();
  // console.log(location.pathname);

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  // Main function
  const runCoco = async () => {
  
  
    // https://tensorflowjsrealtimemodel.s3.au-syd.cloud-object-storage.appdomain.cloud/model.json
    const net = await tf.loadGraphModel(
      "https://tensorflowjsrealtimemodel.s3.au-syd.cloud-object-storage.appdomain.cloud/model.json"
    );

    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 16.7);
  };

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    //Our first draw
    context.fillStyle = '#000000'
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
  }, [])

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // 4. TODO - Make Detections
      const img = tf.browser.fromPixels(video);
      const resized = tf.image.resizeBilinear(img, [640, 480]);
      const casted = resized.cast("int32");
      const expanded = casted.expandDims(0);
      const obj = await net.executeAsync(expanded);
      // console.log(obj);

      const boxes = await obj[1].array();
      const classes = await obj[2].array();
      const scores = await obj[4].array();

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d") || null>(null);
      

      // 5. TODO - Update drawing utility
      // drawSomething(obj, ctx)
      requestAnimationFrame(() => {
        drawRect(
          boxes[0],
          classes[0],
          scores[0],
          0.8,
          videoWidth,
          videoHeight,
          ctx
        );
      });

      tf.dispose(img);
      tf.dispose(resized);
      tf.dispose(casted);
      tf.dispose(expanded);
      tf.dispose(obj);
    }
  };


  const sendMessage = async () => {
    console.log("i am pressed");
    localStorage.setItem('Message', textMessage);
    return navigate("/home");
  }

  useEffect(() => {
    runCoco();
  }, []);

  return (
    
    <>

<div name="viewport" content="width=device-width, user-scalable=no" className="chatRooom">
      
      <header >
        <Webcam
          ref={webcamRef}
          muted={true}
          style={{
            // eslint-disable-next-line no-undef
 
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />


<canvas id="canvas" ref={canvasRef} width="40" height="80" style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            top: 0,
            textAlign: "center",
            zindex: 8,
            
          }}>

 
</canvas>
        {/* <canvas
          ref={canvasRef}
          
        /> */}
      </header>
    </div>


    <h1>{textMessage}</h1>
    <Input action='Enter' value={textMessage} placeholder='Detected gesture..'  onClick={sendMessage}/>
    <button className="myBtn" onClick={sendMessage}>kjbjyvhgfcgdfgh</button>

    </>
  
  );
}

export default Detect;
