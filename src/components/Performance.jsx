import React, { useEffect, useState } from "react";
import axios from "axios";
import pbar from "../assets/pbar.jpg";
const Performance = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const source = axios.CancelToken.source();
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/bitcoin?market_data=true&sparkline=true "
      )
      .then((response) => {
        setData(response.data); // Handle successful response
        console.log(data);
        if (data) {
          console.log(Math.min(data.market_data.sparkline_7d.price));
        }
        console.log(response);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching data from api:", error);
      });

    return () => {
      source.cancel("Request cancelled due to cleanup");
    };
  }, []);
  const calculateDifferenceInYears = (givenDateString) => {
    const givenDate = new Date(givenDateString);
    const currentDate = new Date();
    return ((currentDate - givenDate) / (1000 * 60 * 60 * 24 * 365.25)).toFixed(
      0
    );
  };
  function formatDateToMDY(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}
  return (
    <div className="bg-white">
      <h1>Performance</h1>
      {data ? (
        <>
          <div className="flex">
            <div>
              <h3>Todays low</h3>
              <span>{data.market_data.low_24h.usd}</span>
            </div>
            <img src={pbar} className="h-[20px]"></img>
            <div>
              <h3>Todays high</h3>
              <span>
                {data.market_data.high_24h.usd.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </span>
            </div>
          </div>
          <div className="flex">
            <div>
              <h3>Todays low</h3>
              <span>
                {data.market_data.low_24h.usd.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </span>
            </div>
            <img src={pbar} className="h-[20px]"></img>
            <div>
              <h3>Todays high</h3>
              <span>
                {data.market_data.high_24h.usd.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </span>
            </div>
          </div>
          <h2>Fundamentals</h2>
          <div className="flex">
            <div>
              <div className="flex">
                <div>Bitcoin Price</div>
                <div>
                  {data.market_data.current_price.usd.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </div>
              </div>
              <div className="flex">
                <div>24h high/24h low :</div>
                <div>
                  {data.market_data.high_24h.usd.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                  /
                  {data.market_data.low_24h.usd.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </div>
              </div>
              <div className="flex">
                <div>7d high/7day low :</div>
                <div>
                  {Math.min(
                    ...data.market_data.sparkline_7d.price
                  ).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                  /
                  {Math.max(
                    ...data.market_data.sparkline_7d.price
                  ).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </div>
              </div>
              <div className="flex">
                <div>Trading volume</div>
                <div>
                  {data.market_data.total_volume.usd.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </div>
              </div>
              <div className="flex">
                <div>Market Cap rank</div>
                <div>{data.market_cap_rank}</div>
              </div>
            </div>
            <div className="">
              <div className="flex">
                <div>Market Cap</div>
                <div>
                  {data.market_data.market_cap.usd.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </div>
              </div>
              <div className="flex">
                <div>Market Cap dominance</div>
                <div>
                  {(data.market_data.total_supply /
                    data.market_data.total_volume.usd) *
                    100}
                </div>
              </div>
              <div className="flex">
                <div>Volume/ Market Cap</div>
                <div>{data.market_data.market_cap_fdv_ratio}</div>
              </div>
              <div className="flex">
                <div>All time high</div>
                <div>
                  {data.market_data.ath.usd.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </div>
                <div>{data.market_data.ath_change_percentage.usd}%</div>
                <div>{formatDateToMDY(`${data.market_data.ath_date.usd}`)}</div>
                <div>
                 ( About{" "}
                  {calculateDifferenceInYears(
                    `${data.market_data.ath_date.usd}`
                  )}{" "}
                  years ago{" "} )
                </div>
              </div>
              <div className="flex">
                <div>All time low</div>
                <div>
                  {data.market_data.atl.usd.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </div>
                <div className="ml-4">
                  +{data.market_data.atl_change_percentage.usd}%
                </div>
                <div>{formatDateToMDY(`${data.market_data.atl_date.usd}`)}</div>
                <div>
                  (About{" "}
                  {calculateDifferenceInYears(
                    `${data.market_data.atl_date.usd}`
                  )}{" "}
                  years ago{" "})
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default Performance;
