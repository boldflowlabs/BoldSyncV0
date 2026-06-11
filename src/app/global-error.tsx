'use client'

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  return (
    <html>
      <body>
        <div className="p-4">
          <h2 className="text-xl font-bold text-red-500">A global error occurred!</h2>
          <pre className="mt-2 p-4 bg-red-950 text-red-200 rounded overflow-auto">
            {error.message}
            {'\n'}
            {error.stack}
          </pre>
          <button
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            onClick={() => unstable_retry()}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
