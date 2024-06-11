// Expanded address

type Address = {
    houseNumber: number,
    houseName: string,
    addressLine1: string
    addressLine2: string
    city: string
    county: string
    postcode: string
  }
  
  const printAddress = (address: Address) => {
    print2(address.houseNumber)
  }
  
  const print2 = (line: string | number) => {
    console.log(line)
  }

  //
  // Expanded address

// type Address = {
//     houseNumber?: number
//     houseName?: string
//     addressLine1: string
//     addressLine2?: string
//     city: string
//     county: string
//     postcode: string
//   }
  
//   const printAddress = (address: Address) => {
//     print(address.houseNumber)
//   }
  
//   const print = (line: string) => {
//     console.log(line)
//   }
//   //fixed
//   // Expanded address

// type Address = {
//     houseNumber?: number
//     houseName?: string
//     addressLine1: string
//     addressLine2?: string
//     city: string
//     county: string
//     postcode: string
//   }
  
//   const printAddress = (address: Address) => {
//     if (address.houseNumber) {
//       print(address.houseNumber)
//     }
//   }
  
//   const print = (line: string | number) => {
//     console.log(line)
//   }
  