import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Success from "./../../Assets/images/check.png";
import Failed from "./../../Assets/images/failed.png";
import Empty from "./../../Assets/images/empty.png";
import { Link } from "react-router-dom";
import SendBTCModal from "../../Components/Transactions/send-modal.component";
import ReceiveBTCModal from "../../Components/Transactions/receive-modal.component";

export default function WalletDetailsPage() {
  const { walletAddress } = useParams();

  const [data, setData] = useState();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      network: "BTCTEST",
      address: walletAddress,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(
      "https://btc-wallet-app.herokuapp.com/return-wallet-address-info",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result.data);
        setLoad(true);
      })
      .catch((error) => console.log("error", error));
  }, []);

  let txs = [
    {
      txid: "1110dc15bb8a1aa59269422bee06da00d9d8b0e1dc6b325595bb68b1744a4b68",
      block_no: 2349822,
      confirmations: 9,
      time: 1665220228,
      outgoing: {
        value: "0.01640432",
        outputs: [
          {
            output_no: 0,
            address: "moamcWFGyxnnoe3a6DGiYfPBF1QBuzF3N9",
            value: "0.00006000",
            spent: null,
          },
          {
            output_no: 1,
            address: "mq8zBc2iY7US8udeKrfB5Sexr3jsNmc5JV",
            value: "0.01621643",
            spent: null,
          },
        ],
      },
      incoming: {
        output_no: 1,
        value: "0.01621643",
        spent: null,
        inputs: [
          {
            input_no: 0,
            address: "mq8zBc2iY7US8udeKrfB5Sexr3jsNmc5JV",
            received_from: {
              txid: "8669caffdeae2a9c8a094653d5cc856ab7ee9f39dbf132e6db2331c3aea4bc12",
              output_no: 1,
            },
          },
          {
            input_no: 1,
            address: "mq8zBc2iY7US8udeKrfB5Sexr3jsNmc5JV",
            received_from: {
              txid: "2a1d0bbd24c20908ddfba12c9e75d235a3adf4072659ffc8b7219c5b3926aaff",
              output_no: 1,
            },
          },
        ],
        req_sigs: null,
        script_asm:
          "OP_DUP OP_HASH160 6989aef19f04b5234287b5ca772580a2a927851b OP_EQUALVERIFY OP_CHECKSIG",
        script_hex: "76a9146989aef19f04b5234287b5ca772580a2a927851b88ac",
      },
    },
    {
      txid: "2a1d0bbd24c20908ddfba12c9e75d235a3adf4072659ffc8b7219c5b3926aaff",
      block_no: 2349821,
      confirmations: 10,
      time: 1665219974,
      incoming: {
        output_no: 1,
        value: "0.01639221",
        spent: {
          txid: "1110dc15bb8a1aa59269422bee06da00d9d8b0e1dc6b325595bb68b1744a4b68",
          input_no: 1,
        },
        inputs: [
          {
            input_no: 0,
            address: "mgxS9ZPn1TFDa8hxFD5FZquPsNMVXUxfMp",
            received_from: {
              txid: "e293e64100808adfc7fb47d330e91f109f1b78fd1eb8e5215d47dc47b4357436",
              output_no: 1,
            },
          },
        ],
        req_sigs: null,
        script_asm:
          "OP_DUP OP_HASH160 6989aef19f04b5234287b5ca772580a2a927851b OP_EQUALVERIFY OP_CHECKSIG",
        script_hex: "76a9146989aef19f04b5234287b5ca772580a2a927851b88ac",
      },
    },
    {
      txid: "8669caffdeae2a9c8a094653d5cc856ab7ee9f39dbf132e6db2331c3aea4bc12",
      block_no: 2349819,
      confirmations: 12,
      time: 1665218694,
      outgoing: {
        value: "0.00020000",
        outputs: [
          {
            output_no: 0,
            address: "mnJJCCLa8FEpVFKoCeE2BUQWKaT6rWUGWV",
            value: "0.00006000",
            spent: null,
          },
          {
            output_no: 1,
            address: "mq8zBc2iY7US8udeKrfB5Sexr3jsNmc5JV",
            value: "0.00001211",
            spent: {
              txid: "1110dc15bb8a1aa59269422bee06da00d9d8b0e1dc6b325595bb68b1744a4b68",
              input_no: 0,
            },
          },
        ],
      },
      incoming: {
        output_no: 1,
        value: "0.00001211",
        spent: {
          txid: "1110dc15bb8a1aa59269422bee06da00d9d8b0e1dc6b325595bb68b1744a4b68",
          input_no: 0,
        },
        inputs: [
          {
            input_no: 0,
            address: "mq8zBc2iY7US8udeKrfB5Sexr3jsNmc5JV",
            received_from: {
              txid: "fee3b1d775290ea4b051174a6e92b0716f421ed3ba6e596ca9ba32cf41ffbf56",
              output_no: 0,
            },
          },
          {
            input_no: 1,
            address: "mq8zBc2iY7US8udeKrfB5Sexr3jsNmc5JV",
            received_from: {
              txid: "fe1d6046033f3e233fcdd13300b5e9408e8915a7a339b5c71168cb3acf3c50cd",
              output_no: 1,
            },
          },
        ],
        req_sigs: null,
        script_asm:
          "OP_DUP OP_HASH160 6989aef19f04b5234287b5ca772580a2a927851b OP_EQUALVERIFY OP_CHECKSIG",
        script_hex: "76a9146989aef19f04b5234287b5ca772580a2a927851b88ac",
      },
    },
    {
      txid: "fe1d6046033f3e233fcdd13300b5e9408e8915a7a339b5c71168cb3acf3c50cd",
      block_no: 2349626,
      confirmations: 205,
      time: 1665074405,
      incoming: {
        output_no: 1,
        value: "0.00010000",
        spent: {
          txid: "8669caffdeae2a9c8a094653d5cc856ab7ee9f39dbf132e6db2331c3aea4bc12",
          input_no: 1,
        },
        inputs: [
          {
            input_no: 0,
            address: "tb1qd58l4568vudgd032p7rl8htmzt0esqs2z4ne2l",
            received_from: {
              txid: "fee3b1d775290ea4b051174a6e92b0716f421ed3ba6e596ca9ba32cf41ffbf56",
              output_no: 1,
            },
          },
        ],
        req_sigs: null,
        script_asm:
          "OP_DUP OP_HASH160 6989aef19f04b5234287b5ca772580a2a927851b OP_EQUALVERIFY OP_CHECKSIG",
        script_hex: "76a9146989aef19f04b5234287b5ca772580a2a927851b88ac",
      },
    },
    {
      txid: "fee3b1d775290ea4b051174a6e92b0716f421ed3ba6e596ca9ba32cf41ffbf56",
      block_no: 2349626,
      confirmations: 205,
      time: 1665074378,
      incoming: {
        output_no: 0,
        value: "0.00010000",
        spent: {
          txid: "8669caffdeae2a9c8a094653d5cc856ab7ee9f39dbf132e6db2331c3aea4bc12",
          input_no: 0,
        },
        inputs: [
          {
            input_no: 0,
            address: "tb1qf7fc7gp0sk4dhu2xk3kl0gz7ykh9zx2tc9c0le",
            received_from: {
              txid: "921a417389e22a8a8376a653c81faa602ecacd1b88260223530d5e8b113f2cc7",
              output_no: 0,
            },
          },
        ],
        req_sigs: null,
        script_asm:
          "OP_DUP OP_HASH160 6989aef19f04b5234287b5ca772580a2a927851b OP_EQUALVERIFY OP_CHECKSIG",
        script_hex: "76a9146989aef19f04b5234287b5ca772580a2a927851b88ac",
      },
    },
  ];

  return (
    <>
      <div className="container">
        {data ? (
          <div className="col-12 d-grid mt-3 gap-3">
            <div>
              <h3>Wallet Details</h3>
              <div className="d-flex gap-3">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-mdb-toggle="modal"
                  data-mdb-target="#sendBTCModal"
                >
                  Send Crypto
                </button>
                <SendBTCModal userAddress={walletAddress} />

                <button
                  type="button"
                  class="btn btn-primary"
                  data-mdb-toggle="modal"
                  data-mdb-target="#receiveBTCModal"
                >
                  Receive Crypto
                </button>
              </div>
              <ReceiveBTCModal userAddress={walletAddress} />
            </div>

            <div className="card">
              <h5 class="card-header bg-black text-white">Wallet</h5>
              <div className="card-body p-0">
                <table className="table-responsive table-sm table">
                  <tbody>
                    <tr>
                      <th>Address</th>
                      <td className="text-wrap text-right">
                        {data && data.address}
                      </td>
                    </tr>
                    <tr>
                      <th>Network</th>
                      <td className="text-right">{data && data.network}</td>
                    </tr>
                    <tr>
                      <th>Balance</th>
                      <td className="text-right">{data && data.balance}</td>
                    </tr>
                    <tr>
                      <th>Pending</th>
                      <td className="text-right">
                        {data && data.received_value}
                      </td>
                    </tr>
                    <tr>
                      <th>Received</th>
                      <td className="text-right">
                        {data && data.pending_value}
                      </td>
                    </tr>
                    <tr>
                      <th>Number of Transactions</th>
                      <td className="text-right">{data && data.total_txs}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="card">
              <div className="card">
                <h5 class="card-header bg-black text-white">Transactions</h5>
                <div className="card-body p-0"></div>
                <table className="mb-0 table bg-white align-middle">
                  <tbody>
                    {txs.map((txs) => (
                      <tr>
                        <td>
                          <Link
                            to={{
                              pathname: `https://sochain.com/tx/BTCTEST/${txs.txid}`,
                            }}
                          >
                            {txs.txid}
                          </Link>
                        </td>
                        <td>{txs.block_no}</td>
                        <td>{txs.confirmations}</td>
                        <td>
                          <span className="badge badge-success rounded-pill d-inline">
                            Active
                          </span>
                        </td>
                        <td>{txs.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="d-flex justify-content-center align-items-center text-center"
            style={{ height: "80vh" }}
          >
            <div className="col-12 col-md-6">
              <img
                src={Empty}
                alt="empty-wallet-list"
                style={{ width: "100px", height: "100px" }}
              />
              <h5 className="card-title">Error.</h5>
              <p className="card-text">Unable to find wallet details.</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
