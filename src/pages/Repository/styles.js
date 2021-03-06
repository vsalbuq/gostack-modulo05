import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #0d5cc9;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid #eee;
  }

  div {
    flex: 1;
    margin-left: 15px;

    strong {
      font-size: 16px;

      a {
        text-decoration: none;
        color: #333;
      }
      a:hover {
        color: #0d5cc9;
      }

      span {
        background: #eee;
        color: #333;
        border-radius: 2px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        padding: 3px 4px;
        margin-left: 10px;
      }
      span:hover {
        background: #0d5cc9;
        color: #fff;
      }
    }

    p {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
  }
`;

export const IssueState = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin: 5px;
    padding: 10px 15px;
    border-radius: 20px;
    border: 1px solid #eee;
  }

  button:hover {
    background: #0d5cc9;
    color: #fff;
  }

  button[name='${props => props.state}'] {
    background: #0d5cc9;
    color: #fff;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    background: #fff;
    border: 1px solid #0d5cc9;
    border-radius: 4px;
    color: #0d5cc9;
    padding: 5px 10px;
    margin: 5px;
  }

  button[type='button']:disabled {
    cursor: not-allowed;
    color: #eee;
    border: 1px solid #eee;
  }
`;
