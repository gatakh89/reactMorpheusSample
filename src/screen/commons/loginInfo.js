import React, { useState, useEffect } from 'react';
import { Flex, NativeBaseProvider, Text, View, Button } from 'native-base';

// let timestemp = new Date().getTime();
const LoginInfo = ({ history }) => {
  useEffect(() => {
    M.data.storage();
    setLoginInfo(M.data.storage());
  }, []);
  const [loginInfo, setLoginInfo] = useState({});
  return (
    <NativeBaseProvider>
      <Flex style={container}>
        <View style={view1}>
          <Text style={textTitle}>정답을 쓰다</Text>
        </View>
        <View style={view2}> {JSON.stringify(loginInfo)}</View>
        <View style={view3}>
          <Button
            style={button}
            onPress={() => {
              history.push('/');
            }}
          >
            <Text style={textInformationUseButton}>확인</Text>
          </Button>
        </View>
      </Flex>
    </NativeBaseProvider>
  );
};

//Style

//전체 스크린
const container = {
  // backgroundColor: '//#region ',

  height: '100vh',
};

//상단 뷰
const view1 = { flex: 1 };
const button = {
  marginLeft: 20,
  marginRight: 20,
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: '#b2b2b2',
  backgroundColor: '#ffffff',
  borderRadius: 5 * 2.5,
  height: 55, //-- 버튼 크기 지정중
  // height: 67,
  // width: '100%',
  marginBottom: 10,
  marginTop: 10,
  // marginTop: '1.6%',
};

//하단 이용안내 버튼 텍스트
const textInformationUseButton = {
  fontSize: 8.3 * 2.5,
  fontWeight: 'normal',
  fontStyle: 'normal',
  lineHeight: 11 * 2.5,
  letterSpacing: 0,
  textAlign: 'center',
  color: '#747474',
};

//상단 타이틀
const textTitle = {
  marginTop: '4.9%',
  //   fontFamily: typography.primary,
  fontSize: 10.7 * 2.5,
  fontWeight: 'normal',
  fontStyle: 'normal',
  lineHeight: 14.3 * 2.5,
  letterSpacing: 0,
  textAlign: 'center',
  color: '#000000',
  alignItems: 'center',
  alignContent: 'center',
  alignSelf: 'center',
};

//중단 뷰
const view2 = {
  marginTop: 4,
  marginBottom: 30,
  marginLeft: 20,
  marginRight: 20,
  flex: 4,
  backgroundColor: '#e9e9e9',
  borderStyle: 'solid',
  borderWidth: 0.3 * 2.5,
  borderColor: '#707070',
};

//하단 뷰
const view3 = {
  // height: 199.5,
  flex: 2,
};

//하단 로그인 버튼 텍스트
const textLoginButton = {
  textDecorationLine: 'underline',
  fontFamily: 'robotto',
  fontSize: 8.3 * 2.5,
  fontWeight: 'normal',
  fontStyle: 'normal',
  lineHeight: 11 * 2.5,
  letterSpacing: 0,
  color: '#747474',
  marginTop: 30,
  marginLeft: '35.5%',
  // width: 41.7 * 2.5,
  // height: 11 * 2.5,
};

export default LoginInfo;
