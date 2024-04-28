import styled from "styled-components";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
`;

const OverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -300%);
  font-size : 80px; 
  font-weight: bold;
  text-align: center;
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(1px);
`;

export default function Featured({}) {
  return (
    <Bg className="font-inter">
      <ImageWrapper>
        <img
          src="https://xcr405255.s3.ap-south-1.amazonaws.com/image.png"
          alt="Featured Image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </ImageWrapper>
      <OverlayText>XCR</OverlayText>
    </Bg>
  );
}
