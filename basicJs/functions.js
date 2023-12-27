const getBrand = (brand = "Hello") => ({
  brand: brand,
  webSite: `www.${brand.toLowerCase()}.com`
})

console.log(getBrand())