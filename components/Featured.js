
import styled from "styled-components";


const Bg = styled.div`
  background-color: #222;
  color: #fff;
  display: flex; // Add this
  align-items: center; // Add this
  justify-content: center; // Add this
  position: relative;
  height: 100vh; // Add this
`;

const OverlayText = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 150px;
  font-weight: bold;
`;

export default function Featured({}) {

  return (
    <Bg className="justify-center items-center w-screen font-inter">
      <img
  src="https://xcr405255.s3.ap-south-1.amazonaws.com/image.png"
  className="object-fit"
  alt="Featured Image"
  style={{maxWidth: '100%', maxHeight: '100%'}} // Add this
/>
      <OverlayText>XCR</OverlayText>
    </Bg>
  );
}