import * as React from "react";
import { useNavigate } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
/* import AddIcon from '@mui/icons-material/Add'; */

import { Box } from "@mui/material";

/* mui css에 css파일을 오버라이딩 하기 위한*/
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
const cache = createCache({
  key: "css",
  prepend: true,
});


export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");
  const nav = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      {/* mui css에 css파일을 오버라이딩 하기 위한  */}
      {/* 이거 하니까 css로 푸터 색상 변경 가능, 위에IMPORT랑cache필요 */}
      <CacheProvider value={cache}>

        {/* position:'fixed' : 푸터를 액정 맨아래 고정하는 옵션 > 고정이라서 content가 많으면 content와 겹치는 문제가 발생 ex)timeline과푸터의겹침현상 > 푸터에 z-index를 높게줘서 해결 > timeline과 footer의 겹침현상을 z-index로 해결했으나 스크롤이 내리는 범위가 짧아서 최하단에 있는 할 일을 보지 못하는 문제가 발생 > timeline하단에만 마진바텀을 주려고 했으나 css파일로 셀렉이 안되서 실패 > 푸터에 mb(마진바텀)을 주니까 이상하게도 timeline에 마진바텀이 들어가는 것처럼 모양이 나와서 해결되버림 >포지션이 fixed인 상태에서 마진바텀을 주는데 아래가 막혀있으니 마진이 위로 올라가버리는 것 같다 > mt로 마진탑으로 주면 똑같은 모양 */}
        <Box sx={{ mb: "130px" }}>
          <BottomNavigation
            sx={{ position: "fixed", width: "100%", bottom: 0 }}
            value={value}
            showLabels
            onChange={handleChange}
          >
            <BottomNavigationAction
              onClick={() => {
                nav("/home");
              }}
              label="Home"
              value="home"
              icon={<HomeIcon />}
            />
            <BottomNavigationAction
              onClick={() => {
                nav("/calendar");
              }}
              label="Calendar"
              value="calendar"
              icon={<CalendarMonthIcon />}
            />

            {/* <BottomNavigationAction
        onClick={()=>{nav("/addEvent")}}
        label="Add"
        value="Add"
        icon={<AddIcon />}
      /> */}

            <BottomNavigationAction
              onClick={() => {
                nav("/memo");
              }}
              label="Memo"
              value="memo"
              icon={<AutoAwesomeMotionIcon />}
            />

            <BottomNavigationAction
              onClick={() => {
                nav("/myProfile");
              }}
              label="MyProfile"
              value="myProfile"
              icon={<PersonIcon />}
            />
          </BottomNavigation>
        </Box>
      </CacheProvider>
    </div>
  );
}
