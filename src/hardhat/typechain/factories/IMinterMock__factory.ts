/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IMinterMock } from "../IMinterMock";

export class IMinterMock__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMinterMock {
    return new Contract(address, _abi, signerOrProvider) as IMinterMock;
  }
}

const _abi = [
  {
    constant: false,
    inputs: [],
    name: "renounceMinter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];
