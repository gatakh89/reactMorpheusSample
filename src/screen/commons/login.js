import { Flex, Box, Text, NativeBaseProvider, HStack, IconButton, Input, Button, Stack, CloseIcon } from 'native-base';
import React, { useState } from 'react';
import axios from 'axios';
import { margin } from 'styled-system';
const login = ({ history }) => {
  const LoginHeader = () => {
    return (
      <>
        <Box safeAreaTop backgroundColor="transparent" />

        <HStack bg="transparent" justifyContent="space-between" alignItems="center">
          <HStack space={3}>
            <IconButton variant="unstyled" icon={<CloseIcon size="4" color="transparent" />}></IconButton>
          </HStack>
          <HStack space={1} alignItems="center">
            <Text
              style={{
                fontSize: 24,
                fontWeight: '600',
                fontStyle: 'normal',
                lineHeight: 30,
                letterSpacing: 0,
                textAlign: 'center',
                color: '#000000',
              }}
            >
              로그인
            </Text>
          </HStack>

          <HStack space={1}>
            <IconButton
              onPress={() => history.push('/')}
              icon={<CloseIcon size="4" name="close" color="#000000" />}
            ></IconButton>
          </HStack>

          {/* <IconButton onPress={onRightPress} icon={<MaterialIcons name="close" color="black" />} /> */}
        </HStack>
      </>
    );
  };

  const fetchData = async () => {
    // 파라메터 오류 체크
    if (!userInfo.memberId) {
      M.pop.instance('아이디를 입력하세요');
      return;
    }
    if (!userInfo.memberPw) {
      M.pop.instance('패스워드를 입력하세요');
      return;
    }
    const result = await axios.post(`http://192.168.1.203:3100/rest/login/loginMemberInfo`, userInfo);

    if (result.data.retCode === 'OK') {
      M.data.storage(result.data.data);
      if (result.data.data.memberType === 'memb_type01') {
        history.push('/studentMain');
      } else {
        history.push('/teacherMain');
      }
    } else {
      M.pop.alert({
        title: '로그인 실패',
        message: '로그인에 실패하였습니다. 아이디와 비밀번호를 확인하세요',
        buttons: ['확인'],
        callback: function (index) {},
      });
    }
  };
  const [userInfo, setUserInfo] = useState({
    memberId: '',
    memberPw: '',
    token: '',
  });
  return (
    <NativeBaseProvider>
      <Flex style={ROOT}>
        <Stack style={{ margin: 20 }}>
          <LoginHeader />
          <Stack style={view2}>
            <HStack style={itemStyle}>
              <Input
                w="100%"
                style={input}
                placeholder="(ID)"
                // defaultValue={userInfo.memberId}
                onChangeText={(text) => {
                  setUserInfo({ ...userInfo, memberId: text });
                }}
              ></Input>
            </HStack>
            <HStack>
              <Input
                w="100%"
                style={input}
                type="password"
                // defaultValue={userInfo.memberPw}
                placeholder="(PW)"
                onChangeText={(text) => {
                  setUserInfo({ ...userInfo, memberPw: text });
                }}
              />
            </HStack>
          </Stack>
          <Stack style={case3}>
            <Button style={button} onPress={fetchData}>
              <Text style={textLoginButton}>로그인</Text>
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </NativeBaseProvider>
  );
};

//전체 스크린
const ROOT = {
  height: '100vh',
  // margin: 20,
  backgroundColor: 'transparent',
};
// 상단 헤더

const view2 = {
  backgroundColor: 'transparent',
  // height: '80%',
  marginTop: 70,

  marginBottom: 23,
  // borderTopWidth: 1,
};
const itemStyle = {
  marginBottom: 13,

  // borderWidth: 0.3,
};
const input = {
  backgroundColor: 'white',
  width: '100%',
  borderStyle: 'solid',
  borderWidth: 0.3,
  borderColor: '#707070',
};
const case3 = {
  // height: '100%',
};

const button = {
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: '#b2b2b2',
  backgroundColor: '#8d9ac5',
  borderRadius: 5 * 2.5,
  height: 55, //-- 버튼 크기 지정중
  // height: 67,
  // width: '100%',
  marginBottom: 10,
  marginTop: 10,
  // marginTop: '1.6%',
};
const textLoginButton = {
  fontFamily: 'robotto',
  fontSize: 8.3 * 2.5,
  fontWeight: 'normal',
  fontStyle: 'normal',
  color: '#747474',
};

export default login;
