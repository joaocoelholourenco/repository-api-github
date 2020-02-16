import styled from 'styled-components';

export const Loading = styled.div`
  color: #333;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a{
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img{
    height: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }
  h1{
    font-size: 24px;
    margin-top: 10px;
  }

  p{
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

    img {
      height: 36px;
      width: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong{
        font-size: 16px;

        a{
          text-decoration: none;
          color: #333;

          &:hover{
            color: #7159c1;
          }
        }

        span{
          background: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px
        }
      }

        p{
          margin-top: 5px;
          font-size: 12px;
          color: #999;
        }
    }
  }
`;

export const IssueFilter = styled.div`
margin-top: 20px;
`;
export const Button = styled.button.attrs(
  { type: "button" }
)`

    background: #fff;
    border-radius: 4px;
    border: 1.3px solid #7159c1;
    padding: 10px;
    margin-left: 10px;
    color: #333;

    &:nth-child(${props => props.active + 1}) {
      background: #7159c1;
      color: white;
    }

  &:hover{
    background: #7159c1;
    opacity: 0.9;
    color: #fff;
  }


`;

export const PageActions = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  button {
    background: #7159c1;
    color: white;
    transition: opacity 0.25s ease-out;
    border-radius: 4px;
    outline: 0;
    border: 0;
    padding: 8px;
    &:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }
  }
`;
