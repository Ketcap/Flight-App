class Flight {
  constructor({ Order, OutboundLegId: { DestinationStation, OriginStation } }) {
    this.prices = {
      low: Order.lowestPrice,
      max: Order.highestPrice
    }
    this.flightInfo = {
      from: OriginStation,
      to: DestinationStation
    }
  }

}

export { Flight };