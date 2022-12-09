import {
  spring,
  useCurrentFrame,
  useVideoConfig,
  getInputProps,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/TitanOne";

export const MyComposition = () => {
  const { fontFamily } = loadFont;
  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();
  const { singleArtboard } = getInputProps();

  return (
    <>
      <section 
      style={{
        backgroundColor:'#3b82F6',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "40px",
            backgroundColor: "white",
            width:'80%',
            height:'85%',
            fontFamily: fontFamily,
            margin:'auto',
            borderRadius:'15px',
            boxShadow:'.2em .8em 2em rgba(0, 0, 0, 0.2)'
          }}
        >
          {/* top */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div>
              <img
                // src={singleArtboard.profileImageUrl}
                src="welcom"
                alt="img"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "100%",
                }}
              />
            </div>

            <div>
              <h1
                style={{
                  fontWeight: "bold",
                  fontSize: "44px",
                  margin: "0",
                }}
              >
                {/* {singleArtboard.name} */}
                name
              </h1>
              <p
                style={{
                  fontSize: "32px",
                  margin: "0",
                  // color: `${singleArtboard.props.fontColor}`,
                }}
              >
                {/* @{singleArtboard.username} */}
                username
              </p>
            </div>
          </div>

          {/* main text */}
          <div>
            <h1
              style={{
                // fontFamily: `${singleArtboard.props.fontStyle}`,
                // fontSize: `${singleArtboard.props.fontSize}px`,
                overflowWrap: "break-word",
              }}
            >
              {
                // singleArtboard.text
                "weclom dghhje khjk"
                  .split(" ")
                  .map((t) => ` ${t} `)
                  .map((t, i) => {
                    return (
                      <span
                        key={t}
                        style={{
                          marginLeft: 6,
                          marginRight: 6,
                          transform: `scale(${spring({
                            fps: videoConfig.fps,
                            frame: frame - i * 5,
                            config: {
                              damping: 100,
                              stiffness: 200,
                              mass: 0.5,
                            },
                          })})`,
                          display: "inline-block",
                        }}
                      >
                        {t}
                      </span>
                    );
                  })}
            </h1>
          </div>

          {/* bottom */}
          <div
            style={{
              // color: `${singleArtboard.props.fontColor}`
            }}>
            <p
              style={{
                fontSize: "28px",
              }}
            >
              {/* {singleArtboard.source} */} pfkl
            </p>
            <div
              className="border-y p-2.5 md:p-4"
              style={{
                borderTop: "1px solid #e5e7eb",
                borderBottom: "1px solid #e5e7eb",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    {/* {singleArtboard.retweetCount} */}
                    3
                  </p>
                  <p>Retweets</p>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    {/* {singleArtboard.quoteCount} */}
                    45
                  </p>
                  <p>Quote Tweets</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    {/* {singleArtboard.likeCount} */}
                    345
                  </p>
                  <p>Likes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
