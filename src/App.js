import "./App.css";
import { Card, Col, Divider, Row, Table, Space, Tag } from "antd";
import React, { useState } from "react";
import { Grid } from "@mantine/core";
import logo from "../src/logo.png";

function App() {
  // let total = [];

  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "name",
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "Discription of Goods",
      dataIndex: "product",
      key: "age",
    },
    {
      title: "HSN/SAC",
      dataIndex: "hsc",
      key: "address",
    },
    {
      title: "Quality",
      dataIndex: "quantity",
      key: "address",
    },
    {
      title: "Rate",
      dataIndex: "rate",
      key: "address",
    },
    {
      title: "Per",
      dataIndex: "per",
      key: "address",
    },
    {
      title: "Amount",
      dataIndex: "address",
      key: "address",
      render: (_, record) => (
        <div>
          <p>{record.quantity * record.rate}</p>
        </div>
      ),
    },
    // {
    //   title: "Quality",
    //   key: "tags",
    //   dataIndex: "tags",
    //   render: (_, { tags }) => (
    //     <>
    //       {tags.map((tag) => {
    //         let color = tag.length > 5 ? "geekblue" : "green";
    //         if (tag === "loser") {
    //           color = "volcano";
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_, record) => (
    //     <Space size="middle">
    //       <a>Invite {record.name}</a>
    //       <a>Delete</a>
    //     </Space>
    //   ),
    // },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      product: "New York No. 1 Lake Park",
      hsc: 256389,
      quantity: 10,
      rate: 450,
      per: "BTL",
      // hsc: ["nice", "developer"],
    },
    {
      key: "1",
      name: "John Brown",
      age: 32,
      product: "New York No. 1 Lake Park",
      hsc: 256389,
      quantity: 15,
      rate: 450,
      per: "BTL",
      // hsc: ["nice", "developer"],
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          width: "100%",
          margin: "20px",
        }}
      >
        <Grid grow gutter="0">
          <Grid.Col gutter="0" span={6}>
            <Row
              style={{
                borderBottom: "1px solid black",
                borderRight: "1px solid black",
              }}
            >
              <Col span={8}>
                <img src={logo} width="100%" alt="" />
              </Col>
              <Col
                span={15}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div>
                  <div>
                    <strong>Nanoventions Private Limited</strong>
                  </div>
                  <div>Sy No:719/1B,Kembanur Road</div>
                  <div>Thondamuthur,</div>
                  <div>Coimbatore-641109</div>
                  <div>GSTIN 33AAHCN6447L1Z3</div>
                  <div>State Name: Tamil Nadu, Code:33</div>
                </div>
              </Col>
            </Row>
            <Row
              style={{
                borderBottom: "1px solid black",
                borderRight: "1px solid black",
                paddingLeft: "10px",
              }}
            >
              <Col span={24} style={{}}>
                <div>Consignee (Ship to)</div>
                <div>
                  <strong>XYZ</strong>
                </div>
                <div>13, Second Street, RS Puram, Coimbatore-641027</div>
                <div>GSTIN/UIN : 33AAAAL14253Z</div>
                <div>State Name: Tamil Nadu, Code:33</div>
                <br />
                <div>Contact Person: Ram Kumar</div>
                <div>Contact: 2576546</div>
                <br />
              </Col>
            </Row>
            <Row
              style={{
                borderBottom: "1px solid black",
                borderRight: "1px solid black",
                paddingLeft: "10px",
              }}
            >
              <Col span={24} style={{}}>
                <div>Buyer (Bill to)</div>
                <div>
                  <strong>XYZ</strong>
                </div>
                <div>13, Second Street, RS Puram, Coimbatore-641027</div>
                <div>GSTIN/UIN : 33AAAAL14253Z</div>
                <div>State Name: Tamil Nadu, Code:33</div>
                <br />
                <div>Contact Person: Ram Kumar</div>
                <div>Contact: 2576546</div>
                <br />
              </Col>
            </Row>
          </Grid.Col>
          <Grid.Col span={6}>
            <Row
              style={{ borderBottom: "1px solid black", paddingLeft: "10px" }}
            >
              <Col span={12} style={{}}>
                <div>Invoice No:</div>
                <div>
                  <strong>NVPL-1</strong>
                </div>
              </Col>
              <Col
                span={12}
                style={{ borderLeft: "1px solid black", paddingLeft: "10px" }}
              >
                <div>Dated</div>
                <div>
                  <strong>21-Mar-23</strong>
                </div>
              </Col>
            </Row>

            <Row
              style={{ borderBottom: "1px solid black", paddingLeft: "10px" }}
            >
              <Col span={12} style={{}}>
                <div>Delivery Note</div>
                <div>
                  <strong>NVPL</strong>
                </div>
              </Col>
              <Col
                span={12}
                style={{ borderLeft: "1px solid black", paddingLeft: "10px" }}
              ></Col>
            </Row>

            <Row
              style={{ borderBottom: "1px solid black", paddingLeft: "10px" }}
            >
              <Col span={12} style={{}}>
                <div>Reference No & Date</div>
                <div>
                  <strong>222356 dt. 21-Mar-23</strong>
                </div>
              </Col>
              <Col
                span={12}
                style={{ borderLeft: "1px solid black", paddingLeft: "10px" }}
              >
                <div>Other Reference</div>
                <div>
                  <strong></strong>
                </div>
              </Col>
            </Row>

            <Row
              style={{ borderBottom: "1px solid black", paddingLeft: "10px" }}
            >
              <Col span={12} style={{}}>
                <div>Dispatch Doc No.</div>
                <div>
                  <strong>5114 4852 3232</strong>
                </div>
              </Col>
              <Col
                span={12}
                style={{ borderLeft: "1px solid black", paddingLeft: "10px" }}
              >
                <div>Delivery Note Date</div>
                <div>
                  <strong>21-Mar-23</strong>
                </div>
              </Col>
            </Row>

            <Row
              style={{ borderBottom: "1px solid black", paddingLeft: "10px" }}
            >
              <Col span={12} style={{}}>
                <div>Dispatched Through</div>
                <div>
                  <strong>Road</strong>
                </div>
              </Col>
              <Col
                span={12}
                style={{ borderLeft: "1px solid black", paddingLeft: "10px" }}
              >
                <div>Destination</div>
                <div>
                  <strong>Coimbatore</strong>
                </div>
              </Col>
            </Row>

            <Row
              style={{ borderBottom: "1px solid black", paddingLeft: "10px" }}
            >
              <Col span={12} style={{}}>
                <div>Bill of Landing/LR-RR No</div>
                <div>
                  <strong>C052420 dt. 22-Mar-23</strong>
                </div>
              </Col>
              <Col
                span={12}
                style={{ borderLeft: "1px solid black", paddingLeft: "10px" }}
              >
                <div>Motor Vehicle No</div>
                <div>
                  <strong>TN45B5462</strong>
                </div>
              </Col>
            </Row>
          </Grid.Col>
        </Grid>

        {/* <Row>
          <Col>
            <table>
              <tr>
                <th>Invoice # :</th>
                <td>1</td>
              </tr>
              <tr>
                <th>Invoice Date :</th>
                <td>10-01-2018</td>
              </tr>
              <tr>
                <th>Due Date :</th>
                <td>10-01-2018</td>
              </tr>
            </table>
          </Col>
        </Row>

        <Row style={{ marginTop: 48 }}>
          <div>
            Bill To: <strong>Strides Shasun Ltd</strong>
          </div>
          <div>Bannerghatt Road,</div>
          <div>Bangalore - 560076</div>
        </Row> */}

        <Row style={{ marginTop: 10 }}>
          <Col span={24}>
            <Table
              pagination={false}
              columns={columns}
              dataSource={data}
            ></Table>
          </Col>
        </Row>

        <Row style={{ marginTop: 48 }}>
          <Col span={12} offset={16}>
            <table>
              <tr>
                <th>Gross Total :</th>
                <td>Rs. 1599</td>
              </tr>
              <tr>
                <th>IGST @6% :</th>
                <td>Rs. 95.94</td>
              </tr>
              <tr>
                <th>CGST @6% :</th>
                <td>Rs. 95.94</td>
              </tr>
              <tr>
                <th>Nett Total :</th>
                <td>Rs. 1790.88</td>
              </tr>
            </table>
          </Col>
        </Row>

        {/* <Row style={{ marginTop: 48, textAlign: "center" }}>notes</Row>

        <Row style={{ marginTop: 48, textAlign: "center" }}>Footer</Row> */}
      </div>
    </div>
  );
}

export default App;
