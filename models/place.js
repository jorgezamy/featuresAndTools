class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; //{lat: 0.2323, lon: 0.2555 }
    this.id = new Date().toString() + Math.random().toString();
  }
}
