import LoginV1 from './src/loginpage'

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Ensures it covers the full height of the viewport
      }}
    >
      <LoginV1 />
    </div>
  )
}
