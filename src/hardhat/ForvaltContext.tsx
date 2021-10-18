/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
    AuthProvider,
    AuthProvider__factory,
    CapTableFactory,
    CapTableFactory__factory,
    CapTableRegistry,
    CapTableRegistry__factory,
    ERC1400,
    ERC1400AuthValidator,
    ERC1400AuthValidator__factory,
    ERC1400__factory,
    ERC1820Registry,
    ERC1820Registry__factory,
} from "@brok/captable-contracts";
import { SIGNER_EVENTS, WalletConnectSigner } from "@symfoni/walletconnect-v2-ethers-signer";
import copy from "clipboard-copy";
import { ethers, providers, Signer as EthersSigner, Wallet } from "ethers";
import { Box, Button, Grid, Text, TextInput } from "grommet";
import { Copy } from "grommet-icons";
import QRCode from "qrcode.react";
import React, { useCallback, useEffect, useState } from "react";
import { SignatureRequestModal } from "../components/SignatureRequestModal";
import { Modal } from "../components/ui/Modal";
import { SignatureRequestHandler } from "../utils/SignerRequestHandler";
import { getAuthProvider } from "./contracts/AuthProvider";
import { getCapTableFactory } from "./contracts/CapTableFactory";
import { getCapTableRegistry } from "./contracts/CapTableRegistry";
import { getERC1400 } from "./contracts/ERC1400";
import { getERC1400AuthValidator } from "./contracts/ERC1400AuthValidator";
import { getERC1820Registry } from "./contracts/ERC1820Registry";

export const SymfoniContext = React.createContext<SymfoniContextInterface>(undefined!);
export const ERC1400Context = React.createContext<SymfoniERC1400>(undefined!);
export const AuthProviderContext = React.createContext<SymfoniAuthProvider>(undefined!);
export const ERC1820RegistryContext = React.createContext<SymfoniERC1820Registry>(undefined!);
export const CapTableFactoryContext = React.createContext<SymfoniCapTableFactory>(undefined!);
export const CapTableRegistryContext = React.createContext<SymfoniCapTableRegistry>(undefined!);
export const ERC1400AuthValidatorContext = React.createContext<SymfoniERC1400AuthValidator>(undefined!);

export interface SymfoniProps {
    autoInit?: boolean;
    showLoading?: boolean;
    loadingComponent?: React.ReactNode;
}

export type SymfoniERC1400 = {
    instance?: ERC1400;
    factory?: ERC1400__factory;
    connect: (address: string) => ERC1400;
};

export type SymfoniAuthProvider = {
    instance?: AuthProvider;
    factory?: AuthProvider__factory;
    connect: (address: string) => AuthProvider;
};
export interface SymfoniERC1820Registry {
    instance?: ERC1820Registry;
    factory?: ERC1820Registry__factory;
    connect: (address: string) => ERC1820Registry;
}
export interface SymfoniCapTableFactory {
    instance?: CapTableFactory;
    factory?: CapTableFactory__factory;
    connect: (address: string) => CapTableFactory;
}
export interface SymfoniCapTableRegistry {
    instance?: CapTableRegistry;
    factory?: CapTableRegistry__factory;
    connect: (address: string) => CapTableRegistry;
}
export interface SymfoniERC1400AuthValidator {
    instance?: ERC1400AuthValidator;
    factory?: ERC1400AuthValidator__factory;
    connect: (address: string) => ERC1400AuthValidator;
}

export type ProviderTypes = "hardhat" | "walletConnectV2" | "web3modal";
const PROVIDERS = ["hardhat", "walletConnectV2", "web3modal"];

export type SignerTypes = "walletConnectV2" | "mnemonic" | "prompt" | "web3modal";
const SIGNERS = ["walletConnectV2", "mnemonic", "prompt", "web3modal"];
export interface InitOpts {
    provider?: ProviderTypes;
    forceSigner?: boolean;
}

type Signer = EthersSigner | WalletConnectSigner;
export enum STATE {
    DEFAULT,
    INITIALIZING,
    PROVIDER_READY,
    PROVIDER_SIGNER_READY,
}

export interface SymfoniContextInterface {
    init: (opts?: InitOpts) => void;
    messages: string[];
    forceSigner: boolean;
    chainId?: number;
    providers: typeof PROVIDERS;
    selectedProvider: ProviderTypes;
    provider: providers.Provider;
    signers: typeof SIGNERS;
    selectedSigner: SignerTypes;
    signer?: Signer;
    address?: string;
    loading: boolean;
    ready: boolean;
    hasSigner: boolean;
    signatureRequestHandler: SignatureRequestHandler;
}
export const Symfoni: React.FC<SymfoniProps> = ({ showLoading = true, autoInit = true, ...props }) => {
    const [state, setState] = useState<STATE>(STATE.DEFAULT);
    const [forceSigner, setForceSigner] = useState<boolean>(false);
    const [chainId, setChainId] = useState<number>(undefined!);
    const [messages, setMessages] = useState<string[]>([]);
    const [signatureRequestHandler, setSignatureRequestHandler] = useState<SignatureRequestHandler>(() => new SignatureRequestHandler());

    const [selectedProvider, setSelectedProvider] = useState<ProviderTypes>("walletConnectV2");
    const [provider, setProvider] = useState<providers.Provider>(undefined!);
    const providers = PROVIDERS;

    const [selectedSigner, setSelectedSigner] = useState<SignerTypes>("walletConnectV2");
    const [signer, setSigner] = useState<Signer | undefined>(undefined);
    const signers = SIGNERS;
    const loading = state === STATE.DEFAULT || state === STATE.INITIALIZING;
    const ready = state === STATE.PROVIDER_READY || state === STATE.PROVIDER_SIGNER_READY;
    const hasSigner = state === STATE.PROVIDER_SIGNER_READY;

    const [address, setAddress] = useState<string>();

    const [ERC1400, setERC1400] = useState<SymfoniERC1400>(undefined!);
    const [AuthProvider, setAuthProvider] = useState<SymfoniAuthProvider>(undefined!);
    const [ERC1820Registry, setERC1820Registry] = useState<SymfoniERC1820Registry>(undefined!);
    const [CapTableFactory, setCapTableFactory] = useState<SymfoniCapTableFactory>(undefined!);
    const [CapTableRegistry, setCapTableRegistry] = useState<SymfoniCapTableRegistry>(undefined!);
    const [ERC1400AuthValidator, setERC1400AuthValidator] = useState<SymfoniERC1400AuthValidator>(undefined!);

    const [showWalletConnectLogin, setShowWalletConnectLogin] = useState(false);
    const [walletConnectURI, setWalletConnectURI] = useState<string>();
    const BROWSER_WALLET_URL = process.env.REACT_APP_BROWSER_WALLET;

    const SIGNER_TIMEOUT = 900;

    const getProvider = async () => {
        if (provider) {
            return provider;
        }
        if (selectedProvider === "walletConnectV2") {
            return new ethers.providers.JsonRpcProvider({
                url: "https://arb-rinkeby.g.alchemy.com/v2/_oMAKsLfMlE5OrHhjUPdBiV-8bKnpGXW",
            });
        }
        if (selectedProvider === "hardhat") {
            return new ethers.providers.JsonRpcProvider({
                url: "http://127.0.0.1:8545",
            });
        }
        throw Error("Must be able to initate a provider");
    };

    const getSigner = useCallback(
        async (_provider: providers.Provider, _forceSigner?: boolean) => {
            if (selectedSigner === "walletConnectV2") {
                return new Promise<Signer | undefined>(async (resolve) => {
                    console.log("getSigner with force ", forceSigner);
                    let resolved = false;
                    if (signer) {
                        return resolve(signer);
                    }
                    const _signer = new WalletConnectSigner({
                        methods: [
                            "eth_sendTransaction",
                            "personal_sign",
                            "eth_signTypedData",
                            "eth_signTransaction",
                            "oracle_data",
                            "did_createVerifiableCredential",
                            "did_requestVerifiableCredential",
                            "symfoni_privateTransferByPartition",
                        ],
                        chainId: 421611,
                        walletConnectOpts: {
                            metadata: {
                                icons: ["https://pbs.twimg.com/profile_images/1201845955215147012/mRA_Whgj_400x400.jpg"],
                                description: "Åpen, tillitsfull og integrert aksjeeierbok.",
                                name: "Brønnøysundregistrene Forvalt",
                                url: "https://www.brreg.no",
                            },
                        },
                        // walletConnectOpts: {
                        //     relayProvider: "wss://localhost:5555"
                        // }
                    }).connect(_provider);
                    if (forceSigner) {
                        _signer.on(SIGNER_EVENTS.uri, (uri: any) => {
                            console.log("NEED URI QR CODE");
                            console.log(uri);
                            setWalletConnectURI(uri);
                            setShowWalletConnectLogin(true);
                        });

                        _signer.on(SIGNER_EVENTS.statusUpdate, (uri: any) => {
                            setShowWalletConnectLogin(false);
                            resolve(_signer);
                        });
                    } else {
                        _signer.on(SIGNER_EVENTS.statusUpdate, (session: any) => {
                            if (!resolved) {
                                resolved = true;
                                return resolve(_signer);
                            }
                        });
                        setTimeout(() => {
                            console.log("TImeout", forceSigner);
                            if (!resolved && !forceSigner) {
                                console.log(`No signer received within ${SIGNER_TIMEOUT / 1000} seconds, proceeding without signer`);
                                resolved = true;
                                return resolve(undefined);
                            }
                        }, SIGNER_TIMEOUT);
                    }
                    console.log("!forceSigner,", !forceSigner);
                    _signer.open({ onlyReconnect: !forceSigner });
                });
            } else if (selectedSigner === "prompt") {
                return new Promise<Signer | undefined>(async (resolve) => {
                    console.log("getSigner with force ", forceSigner);
                    let resolved = false;
                    if (signer) {
                        return resolve(signer);
                    }
                    const _signer = new Wallet("ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80").connect(_provider);
                    resolve(_signer);
                });
            }
        },
        [forceSigner]
    );

    const init = async (opts: InitOpts = {}) => {
        if (opts.provider && opts.provider !== selectedProvider) {
            setSelectedProvider(opts.provider);
        }
        if (opts.forceSigner && opts.forceSigner !== forceSigner) {
            setForceSigner(opts.forceSigner);
        }
        setState(STATE.INITIALIZING);
    };

    useEffect(() => {
        if (autoInit) {
            console.log("init");
            init();
        }
    }, []);

    useEffect(() => {
        let subscribed = true;
        const doAsync = async () => {
            if (state === STATE.INITIALIZING) {
                const request = async () => {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => resolve(Math.random() * 100), 1000);
                    });
                };

                if (!signatureRequestHandler) throw Error("TODO: Create error");
                console.log("Running INITIALIZING");
                const _provider = await getProvider();
                const _signer = await getSigner(_provider);
                console.log("Signer resolved", _signer);
                const _address = _signer ? await _signer.getAddress() : undefined;
                const network = await _provider.getNetwork();
                const _chainId = network.chainId;
                if (subscribed) {
                    setChainId(_chainId);
                    setProvider(_provider);
                    setSigner(_signer);
                    setAddress(_address ? _address : undefined);
                    setERC1400(getERC1400(_provider, _chainId, _signer));
                    setAuthProvider(getAuthProvider(_provider, _chainId, _signer));
                    setERC1820Registry(getERC1820Registry(_provider, _chainId, _signer));
                    setCapTableFactory(getCapTableFactory(_provider, _chainId, _signer));
                    setCapTableRegistry(getCapTableRegistry(_provider, _chainId, _signer));
                    setERC1400AuthValidator(getERC1400AuthValidator(_provider, _chainId, _signer));
                    setState(_signer ? STATE.PROVIDER_SIGNER_READY : STATE.PROVIDER_READY);
                } else {
                    console.log("INITIALIZING un-subscribed");
                }
            }
        };
        doAsync();
        return () => {
            subscribed = false;
        };
    }, [state]);

    return (
        <SymfoniContext.Provider
            value={{
                init: (opts?: InitOpts) => init(opts),
                providers,
                signers,
                forceSigner,
                provider,
                selectedProvider,
                selectedSigner,
                address,
                chainId,
                signer,
                messages,
                loading,
                ready,
                hasSigner,
                signatureRequestHandler,
            }}>
            <AuthProviderContext.Provider value={AuthProvider}>
                <ERC1400Context.Provider value={ERC1400}>
                    <ERC1820RegistryContext.Provider value={ERC1820Registry}>
                        <CapTableFactoryContext.Provider value={CapTableFactory}>
                            <CapTableRegistryContext.Provider value={CapTableRegistry}>
                                <ERC1400AuthValidatorContext.Provider value={ERC1400AuthValidator}>
                                    {!provider && (
                                        <div>
                                            {props.loadingComponent ? (
                                                props.loadingComponent
                                            ) : (
                                                <div>
                                                    <p>Loading Symfoni React...</p>
                                                    {messages.map((msg, i) => (
                                                        <p key={i}>{msg}</p>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    {ready && props.children}
                                    {showWalletConnectLogin && (
                                        <Modal setShow={setShowWalletConnectLogin} show={showWalletConnectLogin}>
                                            <Box>
                                                {walletConnectURI ? (
                                                    <Box gap="small">
                                                        {/* TODO : Fix this, not safe */}
                                                        <Text textAlign="center" truncate>Koble til med en SymfoniID</Text>
                                                        {/* TODO VERY NOT SAFE, just for testing */}
                                                        <Box align="center">
                                                            <QRCode size={200} value={`${walletConnectURI}`}></QRCode>
                                                        </Box>
                                                        <Box >
                                                            <Button
                                                                size="small"
                                                                icon={<Copy></Copy>}
                                                                label="Copy"
                                                                onClick={() => copy(walletConnectURI)}></Button>
                                                        </Box>

                                                    </Box>
                                                ) : (
                                                    <Text>No Wallet Connect URI found</Text>
                                                )}
                                            </Box>
                                        </Modal>
                                    )}
                                    <SignatureRequestModal></SignatureRequestModal>
                                </ERC1400AuthValidatorContext.Provider>
                            </CapTableRegistryContext.Provider>
                        </CapTableFactoryContext.Provider>
                    </ERC1820RegistryContext.Provider>
                </ERC1400Context.Provider>
            </AuthProviderContext.Provider>
        </SymfoniContext.Provider>
    );
};
