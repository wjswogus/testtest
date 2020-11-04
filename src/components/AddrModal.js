import React, { Component } from 'react';
import { AlignCenter } from 'react-bootstrap-icons';
import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';


const ModStyle = styled.div`
    text-align:center;
    margin-top:80px;
`;

class AddrModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            zoneCode : "",
            fullAddress : "",
            isDaumPost : false,
            isRegister : false,
            register: [],
        }
    }

    handleOpenPost = () => {
        this.setState({
            isDaumPost : true
        })
    }

    // postcode
    handleAddress = (data) => {
        let AllAddress = data.address;
        let extraAddress = ''; 
        let sigungu = data.sigungu;
        
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          AllAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        this.setState ({
            fullAddress: AllAddress,
            sigungu : sigungu
        })
      }

    render() {
        const { isModalShow, isModalClose } = this.props;
        const { address, isDaumPost, fullAddress, zoneCode, isRegister } = this.state;
        
        // DaumPostCode style
        const width = 595;
        const height = 450;
        const modalStyle = {
            position: "absolute",
            top: 200,
            left: "-2px",
            zIndex: "100",
            border: "1px solid #000000",
            overflow: "hidden"
        }
    
    return (
        <div className="modalRow">
            <ModStyle>
                  <div className="modalCell">
                      <div className="cellFirst">
                          <div className="zipCode">{zoneCode}</div>
                          <button type="button" onClick={this.handleOpenPost} >
                              <span>내 위치</span>
                          </button>
                      </div>
                      {
                          isDaumPost ?
                              <DaumPostcode
                                  onComplete={this.handleAddress}
                                  autoClose
                                  width={width}
                                  height={height}
                                  style={modalStyle}
                                  isDaumPost={isDaumPost}
                          		/>
                          : null
                      }
                      <div className="address">{fullAddress}</div>
                      {/* <div className="addressBox">this.handleInput}/>
                      </div> */}
                  </div>
                  </ModStyle>
                  </div>
    );
}
}


export default AddrModal;