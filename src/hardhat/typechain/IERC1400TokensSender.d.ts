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
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IERC1400TokensSenderInterface extends ethers.utils.Interface {
  functions: {
    "tokensToTransfer(bytes,bytes32,address,address,address,uint256,bytes,bytes)": FunctionFragment;
    "canTransfer(bytes,bytes32,address,address,address,uint256,bytes,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "tokensToTransfer",
    values: [
      BytesLike,
      BytesLike,
      string,
      string,
      string,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "canTransfer",
    values: [
      BytesLike,
      BytesLike,
      string,
      string,
      string,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "tokensToTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "canTransfer",
    data: BytesLike
  ): Result;

  events: {};
}

export class IERC1400TokensSender extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IERC1400TokensSenderInterface;

  functions: {
    tokensToTransfer(
      payload: BytesLike,
      partition: BytesLike,
      operator: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "tokensToTransfer(bytes,bytes32,address,address,address,uint256,bytes,bytes)"(
      payload: BytesLike,
      partition: BytesLike,
      operator: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    canTransfer(
      payload: BytesLike,
      partition: BytesLike,
      operator: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "canTransfer(bytes,bytes32,address,address,address,uint256,bytes,bytes)"(
      payload: BytesLike,
      partition: BytesLike,
      operator: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;
  };

  tokensToTransfer(
    payload: BytesLike,
    partition: BytesLike,
    operator: string,
    from: string,
    to: string,
    value: BigNumberish,
    data: BytesLike,
    operatorData: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "tokensToTransfer(bytes,bytes32,address,address,address,uint256,bytes,bytes)"(
    payload: BytesLike,
    partition: BytesLike,
    operator: string,
    from: string,
    to: string,
    value: BigNumberish,
    data: BytesLike,
    operatorData: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  canTransfer(
    payload: BytesLike,
    partition: BytesLike,
    operator: string,
    from: string,
    to: string,
    value: BigNumberish,
    data: BytesLike,
    operatorData: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "canTransfer(bytes,bytes32,address,address,address,uint256,bytes,bytes)"(
    payload: BytesLike,
    partition: BytesLike,
    operator: string,
    from: string,
    to: string,
    value: BigNumberish,
    data: BytesLike,
    operatorData: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    tokensToTransfer(
      payload: BytesLike,
      partition: BytesLike,
      operator: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "tokensToTransfer(bytes,bytes32,address,address,address,uint256,bytes,bytes)"(
      payload: BytesLike,
      partition: BytesLike,
      operator: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    canTransfer(
      payload: BytesLike,
      partition: BytesLike,
      operator: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "canTransfer(bytes,bytes32,address,address,address,uint256,bytes,bytes)"(
      payload: BytesLike,
      partition: BytesLike,
      operator: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    tokensToTransfer(
      payload: BytesLike,
      partition: BytesLike,
      operator: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "tokensToTransfer(bytes,bytes32,address,address,address,uint256,bytes,bytes)"(
      payload: BytesLike,
      partition: BytesLike,
      operator: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    canTransfer(
      payload: BytesLike,
      partition: BytesLike,
      operator: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "canTransfer(bytes,bytes32,address,address,address,uint256,bytes,bytes)"(
      payload: BytesLike,
      partition: BytesLike,
      operator: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    tokensToTransfer(
      payload: BytesLike,
      partition: BytesLike,
      operator: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "tokensToTransfer(bytes,bytes32,address,address,address,uint256,bytes,bytes)"(
      payload: BytesLike,
      partition: BytesLike,
      operator: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    canTransfer(
      payload: BytesLike,
      partition: BytesLike,
      operator: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "canTransfer(bytes,bytes32,address,address,address,uint256,bytes,bytes)"(
      payload: BytesLike,
      partition: BytesLike,
      operator: string,
      from: string,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
