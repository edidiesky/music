import styled from "styled-components";

export const Table = styled.div`
  width: 100%;
  padding: 10px 15px;

  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  /* gap: 10px; */
  transition: all 0.5s;
  /* background-color: #fafafa;
  display: flex;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); */

  .headBtn {
    border: 1px solid rgba(0, 0, 0, 1);
    padding: 0.4rem 1rem !important;
    border-radius: 40px !important;
    cursor: pointer;
    &:hover {
      background-color: #f7f7f7;
    }
  }

  .TableContainer {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    overflow-x: auto;
    padding-bottom: 2rem;
    &::-webkit-scrollbar {
      width: 7px;
      height: 7px;
      background: #ccc;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background: #000;
      border-radius: 10px;
      transition: all 0.5s;
      &:hover {
        background: var(--dark-1);
      }
    }
    .tableWrapper {
      border-collapse: collapse;
      width: 100%;
      min-width:100%;
      h4 {
        
      }

      thead {
        tr {
          text-align: start;
          z-index: 200;
          text-align: start;
            width:100%;
          th {
            font-size: 12px;
            font-weight: 700;
            text-align: start;
            color: #5c5c5c;
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
            padding: 0 10px;
            padding-bottom: 14px;
            text-transform: uppercase;
            cursor: pointer;
            transition: all 0.3s var(--transition-2);
           
          }
        }
      }
   
      tbody {
      
        tr {
          transition: all 0.5s var(--transition-2);
          z-index: 200;
        width:100%;

          &:hover {
            background: hsla(0,0%,100%,.1);
          }
          td {
            font-size: 15px;
            font-weight: 400;
            text-align: start;
            padding: 18px 10px;
            min-width: 0;
            /* flex: 1; */
            
            border-bottom: 1px solid rgba(0, 0, 0, 0.08);

           
          }
         
        }
      }
    }
  }
`;
