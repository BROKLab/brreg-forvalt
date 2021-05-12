/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { AllowlistAdminRole } from "../AllowlistAdminRole";

export class AllowlistAdminRole__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AllowlistAdminRole {
    return new Contract(address, _abi, signerOrProvider) as AllowlistAdminRole;
  }
}

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "token",
        type: "address",
      },
    ],
    name: "renounceAllowlistAdmin",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "token",
        type: "address",
      },
      {
        name: "account",
        type: "address",
      },
    ],
    name: "isAllowlistAdmin",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "token",
        type: "address",
      },
      {
        name: "account",
        type: "address",
      },
    ],
    name: "removeAllowlistAdmin",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "token",
        type: "address",
      },
      {
        name: "account",
        type: "address",
      },
    ],
    name: "addAllowlistAdmin",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        name: "account",
        type: "address",
      },
    ],
    name: "AllowlistAdminAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        name: "account",
        type: "address",
      },
    ],
    name: "AllowlistAdminRemoved",
    type: "event",
  },
];
