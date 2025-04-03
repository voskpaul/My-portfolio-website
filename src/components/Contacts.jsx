const Contacts = () => {
    return (
      <div id="contacts" className="flex min-h-[70vh] min-w-full items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
              <h1 className="text-center text-5xl md:text-7xl">
                  <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">Get in Touch</span>
              </h1>
              <p className="text-center text-lg font-semibold text-white">Have something to say? Send me an email through this button, and I’ll reply as soon as possible!</p>
              
              <div className="text-center text-lg font-semibold text-white">
                  <p>Email: <a href="mailto:paulriemii@gmail.com" className="text-indigo-400 hover:underline">paulriemii@gmail.com</a></p>
                  <p>Phone: <a href="tel:+254115346990" className="text-indigo-400 hover:underline">+254 115 346 990</a></p>
              </div>
  
              <a href="mailto:developedbypaulriemii@gmail.com" className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600">Contact Me</a>
          </div>
      </div>
    )
  }
  
  export default Contacts
