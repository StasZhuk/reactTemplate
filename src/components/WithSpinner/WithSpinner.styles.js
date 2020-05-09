import styled from "styled-components"

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border-top: 1px solid #000;
  animation: spin 1s infinite linear;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const SpinnerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 60vh;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
