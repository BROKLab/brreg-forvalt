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

interface IMinterMockInterface extends ethers.utils.Interface {
  functions: {
    "renounceMinter()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "renounceMinter",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "renounceMinter",
    data: BytesLike
  ): Result;

  events: {};
}

export class IMinterMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IMinterMockInterface;

  functions: {
    renounceMinter(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceMinter()"(overrides?: Overrides): Promise<ContractTransaction>;
  };

  renounceMinter(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceMinter()"(overrides?: Overrides): Promise<ContractTransaction>;

  callStatic: {
    renounceMinter(overrides?: CallOverrides): Promise<void>;

    "renounceMinter()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    renounceMinter(overrides?: Overrides): Promise<BigNumber>;

    "renounceMinter()"(overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    renounceMinter(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceMinter()"(overrides?: Overrides): Promise<PopulatedTransaction>;
  };
}
