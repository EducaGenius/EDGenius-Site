export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Estamos trabalhando!
      </h1>

      <p className="text-lg text-gray-600 max-w-xl">
        Estamos realizando melhorias importantes para deixar tudo mais rápido,
        moderno e eficiente. Voltaremos em breve.
      </p>

      <div className="mt-8 animate-pulse">
        <div className="h-4 w-40 bg-gray-300 rounded-full mb-3"></div>
        <div className="h-4 w-32 bg-gray-300 rounded-full mb-3"></div>
        <div className="h-4 w-48 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
}
