import React from "react";

//styles
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const SearchBar = props => {
  return (
    <Nav>
      <LogoHeader>
        <a href="#">
          <CameraLogoImg src="https://i.imgur.com/AS5Embp.png" alt="Logo" />
        </a>
        <Divider />
        <a href="#">
          <ScriptLogo src="https://i.imgur.com/24NDDNh.jpg" alt="Script Logo" />
        </a>
      </LogoHeader>
      <SearchForm onInput={props.search}>
        <div>
          <SearchIcon className="fas fa-search" />
          <SearchInput
            placeholder="Search"
            onChange={props.handle}
            name="username"
            value={props.username}
          />
        </div>
      </SearchForm>
      <LogoContainer>
        <Icons>
          <i className=" far fa-compass fa-2x" />
        </Icons>
        <Icons>
          <i className="far fa-heart fa-2x" />
        </Icons>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={props.logout}
        >
          Log Out
        </Button>
      </LogoContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2.6rem 2rem;
`;

const LogoHeader = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const CameraLogoImg = styled.img`
  width: 24px;
  height: 24px;
`;

const Divider = styled.div`
  background-color: #262626;
  height: 28px;
  margin: 0 16px;
  width: 1px;
`;

const ScriptLogo = styled.img`
  height: 29px;
  width: 103px;
`;

const SearchForm = styled.form`
  flex: 0 1 auto;
  min-width: 125px;
  width: 215px;
`;

const SearchIcon = styled.i`
  position: absolute;
  display: inline;
  top: 41px;
  padding-left: 60px;
`;
const SearchInput = styled.input`
  flex: 1;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  outline: 0;
  padding: 3px 20px 3px 20px;
  text-align: center;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex: 1;
`;

const Icons = styled.p`
  margin-right: 3rem;
`;

export default SearchBar;
