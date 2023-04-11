import styled from "styled-components";

export const PostContainer = styled.div`
  width: 500px;
  height: 350px;
  position: relative;
  image {
    object-fit: cover;
    display: block;
  }
  &:hover {
    opacity: 0.5;
  }
  .link {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    opacity: 0;
    cursor: pointer;
  }
  &:hover .link {
    opacity: 1;
  }
`;
