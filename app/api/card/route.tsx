import { ImageResponse } from 'next/og'

export const runtime = 'edge';

const imageUrl = "https://imagedelivery.net/rsXDEToSLF-yJh1Zowhg1g/93eef443-5001-47c3-3d2d-38365d820300/public"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');
  const avatar = searchParams.get('avatar');
  const point = searchParams.get('point');

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 60,
          color: 'black',
          backgroundImage: `url(${imageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          width: '100%',
          height: '100%',
        }}
      >
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "0px",
          marginLeft: "",
        }}>
          {/* 画像 */}
          <div style={{
            display: 'flex',
            marginBottom: '',
            flexDirection: "column",
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              width="320"
              height="320"
              src={avatar || ""}
              style={{
                borderRadius: 200,
              }}
              alt={""}
            />
          </div>

          {/* ユーザー名 */}
          <div style={{
            display: 'flex',
            flexDirection: "column",
            color: "white",
            fontSize: "60px",
            fontWeight: "bold",
            marginTop: "20px",
          }}>
            <p style={{ margin: '0' }}>
              {username}
            </p>
          </div>
        </div>

        <div style={{
          display: "flex",
          color: "white",
          fontSize: "40px",
          marginTop: "0",
          marginLeft: "0",
        }}>
          {point} pt
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}