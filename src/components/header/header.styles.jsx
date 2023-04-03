import styled from "styled-components";

export const HeaderContainer = styled.nav`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }
  .header-logo {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .header-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .header-links {
    cursor: pointer;
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .header-toggle {
      display: none;
    }
    .header-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .header-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 1.6rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 0.9rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid #4285f4;
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;
