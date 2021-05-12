/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ERC1820ImplementerInterfaceInterface extends ethers.utils.Interface {
  functions: {
    "canImplementInterfaceForAddress(bytes32,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "canImplementInterfaceForAddress",
    values: [BytesLike, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "canImplementInterfaceForAddress",
    data: BytesLike
  ): Result;

  events: {};
}

export class ERC1820ImplementerInterface extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ERC1820ImplementerInterfaceInterface;

  functions: {
    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      addr: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "canImplementInterfaceForAddress(bytes32,address)"(
      interfaceHash: BytesLike,
      addr: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;
  };

  canImplementInterfaceForAddress(
    interfaceHash: BytesLike,
    addr: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "canImplementInterfaceForAddress(bytes32,address)"(
    interfaceHash: BytesLike,
    addr: string,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      addr: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "canImplementInterfaceForAddress(bytes32,address)"(
      interfaceHash: BytesLike,
      addr: string,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "canImplementInterfaceForAddress(bytes32,address)"(
      interfaceHash: BytesLike,
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "canImplementInterfaceForAddress(bytes32,address)"(
      interfaceHash: BytesLike,
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
