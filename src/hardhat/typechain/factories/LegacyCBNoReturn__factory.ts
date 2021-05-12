/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { LegacyCBNoReturn } from "../LegacyCBNoReturn";

export class LegacyCBNoReturn__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<LegacyCBNoReturn> {
    return super.deploy(overrides || {}) as Promise<LegacyCBNoReturn>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LegacyCBNoReturn {
    return super.attach(address) as LegacyCBNoReturn;
  }
  connect(signer: Signer): LegacyCBNoReturn__factory {
    return super.connect(signer) as LegacyCBNoReturn__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LegacyCBNoReturn {
    return new Contract(address, _abi, signerOrProvider) as LegacyCBNoReturn;
  }
}

const _abi = [
  {
    payable: false,
    stateMutability: "nonpayable",
    type: "fallback",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603e80601d6000396000f3fe6080604052348015600f57600080fd5b5000fea165627a7a72305820cd19576a8f3835df67b546d27316c73f223c3a7844499037633b32ca997dbeff0029";
