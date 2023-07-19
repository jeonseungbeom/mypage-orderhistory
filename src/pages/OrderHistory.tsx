import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//lib
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
//component
import Header from "../components/Header";

interface Item {
  itemId: number;
  itemImg: string;
  itemTitle: string;
  itemSubTitle: string;
  orderDate: string;
  orderNum: number;
  deliveryStatus: string;
}

const OrderHistory = () => {
  const [selectedTab, setSelectedTab] = useState("3months");
  const [itemList, setItemList] = useState<Item[]>([]);
  const navigate = useNavigate();

  const goToOrderDetail = (id: number) => {
    navigate(`/orderDetail/${id}`);
  };

  const handleTabChange = (newValue: string) => {
    setSelectedTab(newValue);
  };

  useEffect(() => {
    fetch(`/data/itemData${selectedTab}.json`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setItemList(data);
      });
  }, [selectedTab]);

  return (
    <Box>
      <Header title="주문 내역" />
      {/* 탭 메뉴 */}
      <Box
        display="flex"
        gap="0.37rem"
        sx={{
          padding: "1.88rem 1.25rem 0.62rem",
        }}
      >
        {TAB_LIST.map((item) => (
          <button
            key={item.tabId}
            style={{
              width: "6.75rem",
              height: "1.6875rem",
              border: "none",
              borderRadius: "0.81rem",
              backgroundColor:
                selectedTab === item.tabValue ? "#DF145B" : "#F0F0F0",
              color: selectedTab === item.tabValue ? "#FFFFFF" : "#505050",
            }}
            onClick={() => handleTabChange(item.tabValue)}
          >
            {item.tabTitle}
          </button>
        ))}
      </Box>
      {/* 선택된 탭의 내용 표시 */}
      {TAB_LIST.map(
        (tab) =>
          selectedTab === tab.tabValue && (
            <Box key={tab.tabId}>
              {itemList.map((item) => (
                <Box key={item.itemId} sx={{ padding: "0 1.25rem" }}>
                  <Typography
                    sx={{
                      paddingTop: "1.25rem",
                      fontSize: "0.8125rem",
                      fontWeight: "700",
                    }}
                  >
                    {item.orderDate}
                  </Typography>
                  <Box
                    display="flex"
                    borderBottom="1px solid #F0F0F0"
                    sx={{ padding: "1.25rem 0" }}
                  >
                    <img
                      src={item.itemImg}
                      alt="상품 이미지"
                      style={{ width: "5rem", height: "5rem" }}
                    />
                    <Box
                      display="flex"
                      flexDirection="column"
                      sx={{ padding: "0.25rem 0 0 0.63rem" }}
                    >
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        sx={{ paddingBottom: "0.25rem" }}
                      >
                        <Typography
                          sx={{
                            fontSize: "0.8125rem",
                            color: "#505050",
                            lineHeight: "normal",
                          }}
                        >
                          {item.itemTitle}
                        </Typography>
                        <Typography
                          component="button"
                          onClick={() => goToOrderDetail(item.itemId)}
                          sx={{
                            height: "0.9rem",
                            padding: "0",
                            border: "none",
                            borderBottom: "1px solid #505050",
                            backgroundColor: "#FFFFFF",
                            fontSize: "0.8125rem",
                            fontWeight: "400",
                            lineHeight: "normal",
                            color: "#505050",
                          }}
                        >
                          주문상세
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          width: "15.3125rem",
                          fontSize: "0.8125rem",
                          color: "#505050",
                          paddingBottom: "0.63rem",
                        }}
                      >
                        {item.itemSubTitle}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.8125rem",
                          color: "#505050",
                          paddingBottom: "0.81rem",
                        }}
                      >
                        주문번호 : {item.orderNum}
                      </Typography>
                      {item.deliveryStatus === "배송중" && (
                        <Typography
                          sx={{
                            width: "3.125rem",
                            height: "1.25rem",
                            border: "1px solid #ffffff",
                            borderRadius: "0.63rem",
                            textAlign: "center",
                            fontSize: "0.625rem",
                            lineHeight: "2",
                            backgroundColor: "#E7F1FF",
                            color: "#0068FF",
                          }}
                        >
                          {item.deliveryStatus}
                        </Typography>
                      )}
                      {item.deliveryStatus === "배송완료" && (
                        <Typography
                          sx={{
                            width: "3.125rem",
                            height: "1.25rem",
                            border: "1px solid #ffffff",
                            borderRadius: "0.63rem",
                            textAlign: "center",
                            fontSize: "0.625rem",
                            lineHeight: "2",
                            backgroundColor: "#EEEEEE",
                            color: "#505050",
                          }}
                        >
                          {item.deliveryStatus}
                        </Typography>
                      )}
                      {item.deliveryStatus === "주문 취소" && (
                        <Typography
                          sx={{
                            width: "3.125rem",
                            height: "1.25rem",
                            border: "1px solid #ffffff",
                            borderRadius: "0.63rem",
                            textAlign: "center",
                            fontSize: "0.625rem",
                            lineHeight: "2",
                            backgroundColor: "#FFEBE4",
                            color: "#FF0000",
                          }}
                        >
                          {item.deliveryStatus}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          )
      )}
    </Box>
  );
};

export default OrderHistory;

const TAB_LIST = [
  { tabId: 0, tabTitle: "3개월", tabValue: "3months" },
  { tabId: 1, tabTitle: "1년", tabValue: "1year" },
  { tabId: 2, tabTitle: "전체보기", tabValue: "All" },
];
