import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  List,
  Sold
} from "../generated/NFTMarket/NFTMarket"





export function createListEvent(
  nft: Address,
  tokenId: BigInt,
  orderId: Bytes,
  seller: Address,
  payToken: Address,
  price: BigInt,
  deadline: BigInt
): List {
  let listEvent = changetype<List>(newMockEvent())

  listEvent.parameters = new Array()

  listEvent.parameters.push(
    new ethereum.EventParam("nft", ethereum.Value.fromAddress(nft))
  )
  listEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  listEvent.parameters.push(
    new ethereum.EventParam("orderId", ethereum.Value.fromFixedBytes(orderId))
  )
  listEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  listEvent.parameters.push(
    new ethereum.EventParam("payToken", ethereum.Value.fromAddress(payToken))
  )
  listEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  listEvent.parameters.push(
    new ethereum.EventParam(
      "deadline",
      ethereum.Value.fromUnsignedBigInt(deadline)
    )
  )

  return listEvent
}







export function createSoldEvent(
  orderId: Bytes,
  buyer: Address,
  fee: BigInt
): Sold {
  let soldEvent = changetype<Sold>(newMockEvent())

  soldEvent.parameters = new Array()

  soldEvent.parameters.push(
    new ethereum.EventParam("orderId", ethereum.Value.fromFixedBytes(orderId))
  )
  soldEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  soldEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )

  return soldEvent
}
