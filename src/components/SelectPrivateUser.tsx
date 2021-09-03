import { ERC1400 } from '@brok/captable-contracts';
import { BytesLike, ethers } from 'ethers';
import { Box, Button, ButtonProps, Grid, Select, Text, TextInput } from "grommet";
import { Trash } from 'grommet-icons';
import React, { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { DEFAULT_CAPTABLE_PARTITION } from '../assets/default';

type PropsSingel = {
    capTable?: ERC1400
    onSubmit: (batchIssueData: PrivateUserData) => void
    onSubmitButtonProps?: ButtonProps
    multiple?: never
    createPartition?: boolean
    selectPartiton?: boolean
}
type PropsMultiple = {
    capTable?: ERC1400
    onSubmit: (batchIssueData: PrivateUserData[]) => void
    onSubmitButtonProps?: ButtonProps
    multiple: true
    createPartition?: boolean
    selectPartiton?: boolean
}
type Props = PropsSingel | PropsMultiple

export interface PrivateUserData {
    address: string
    amount: string
    partition: string
    identifier: string
    name: string
    streetAddress: string
    postalcode: string
    email: string
    id: string
}

const defaultValues = {
    test: [
        {
            identifier: "17107292926",
            address: "",
            amount: "1000",
            partition: DEFAULT_CAPTABLE_PARTITION,
            name: "Robin Testesen",
            streetAddress: "Testveien 55",
            postalcode: "0123",
            email: "rob@test.com",
        },
    ],
    production: [
        {
            identifier: "",
            address: "",
            amount: "",
            partition: DEFAULT_CAPTABLE_PARTITION,
            name: "",
            streetAddress: "",
            postalcode: "",
            email: "",
        },
    ]
};

export const SelectPrivateUser: React.FC<Props> = ({ ...props }) => {
    const { control, watch, register, setValue } = useForm({ defaultValues });
    const enviroment = process.env.NODE_ENV === "development" ? "test" : "production"
    const { fields, append, remove } = useFieldArray({
        control,
        name: enviroment
    });
    const watchFieldArray = watch(enviroment);
    const controlledFields = fields.map((field, index) => {
        return {
            ...field,
            ...watchFieldArray[index]
        };
    });
    const [partitions, setPartitions] = useState<BytesLike[]>([DEFAULT_CAPTABLE_PARTITION]);
    const [newPartition, setNewPartition] = useState("");

    // Get partitions if capTable is set
    useEffect(() => {
        let subscribed = true
        const doAsync = async () => {
            if (props.capTable) {
                try {
                    const partitionsBytes32 = await props.capTable.totalPartitions().catch(() => [])
                    if (subscribed) {
                        setPartitions(old => [...old, ...partitionsBytes32.filter(a => old.indexOf(a) === -1)])
                    }
                } catch (error) {
                    console.debug("Could not retrive partitions from capTable")
                }
            }
        };
        doAsync();
        return () => { subscribed = false }
    }, [props.capTable])

    const handleOnSubmit = () => {
        if (props.multiple) {
            props.onSubmit(controlledFields)
        } else {
            props.onSubmit(controlledFields[0])
        }
    }

    const checkForAddress = (identifier: string, index: number) => {
        if (identifier.substr(0, 2) === "0x") {
            if (ethers.utils.isAddress(identifier)) {
                console.log("Is address")
                setValue(`${enviroment}.${index}.address`, identifier)
            }
        }
    }

    const handleNewPartition = () => {
        if (partitions.indexOf(newPartition) === -1) {
            setPartitions(old => [...old, ...[ethers.utils.formatBytes32String(newPartition)]])
            setNewPartition("")
        }
    }

    const hasAddress = (index: number) => {
        if (controlledFields[index].address.substr(0, 2) === "0x") {
            if (ethers.utils.isAddress(controlledFields[index].address)) {
                return true
            }
        }
        return false
    }

    const columsCount = () => {
        let count = 7
        if (props.selectPartiton) count++
        if (props.multiple) count++
        return count
    }

    return (
        <Box gap="medium" width="large">
            {props.children}
            {props.createPartition &&
                <Box gap="small" elevation="medium" pad="small">
                    <Grid columns={["medium", "small"]}>
                        <TextInput size="small" value={newPartition} onChange={(e) => setNewPartition(e.target.value)} placeholder="Navn på partisjon feks. a-aksje"></TextInput>
                        <Button size="small" label="Foreslå partisjon" onClick={() => handleNewPartition()}></Button>
                    </Grid>
                    <Text size="xsmall">*Partisjoner blir først opprettet når du utsteder en aksje på den.</Text>
                </Box>
            }

            <Box gap="small" >
                <Grid columns={{ count: columsCount(), size: "xsmall" }} gap="small">
                    <Text size="small" weight="bold" truncate>Fødselsnummer</Text>
                    <Text size="small" weight="bold" truncate>Navn</Text>
                    <Text size="small" weight="bold" truncate>Veiadresse</Text>
                    <Text size="small" weight="bold" truncate>Postnummer</Text>
                    <Text size="small" weight="bold" truncate>Epost</Text>
                    <Text size="small" weight="bold" truncate>Antall aksjer</Text>
                    <Text style={{ display: props.selectPartiton ? "none" : "inherit" }} size="small" weight="bold" truncate>Partisjon</Text>
                    <Text style={{ display: props.multiple ? "inherit" : "none" }} size="small" weight="bold" truncate>Handlinger</Text>
                </Grid>

                {controlledFields.map((field, index) => (
                    <Grid columns={{ count: columsCount(), size: "xsmall" }} gap="small" key={index} >
                        <Box>
                            <TextInput {...register(`${enviroment}.${index}.identifier` as const)} onBlur={() => checkForAddress(field.identifier, index)} placeholder="Fødselsnummer" size="small"  ></TextInput>
                        </Box>
                        <Box>
                            <TextInput {...register(`${enviroment}.${index}.name` as const)} disabled={hasAddress(index)} placeholder={"Navn"} size="small" ></TextInput>
                        </Box>
                        <Box>
                            <TextInput  {...register(`${enviroment}.${index}.streetAddress` as const)} disabled={hasAddress(index)} placeholder={"Veiadresse"} size="small"  ></TextInput>
                        </Box>
                        <Box>
                            <TextInput  {...register(`${enviroment}.${index}.postalcode` as const)} disabled={hasAddress(index)} placeholder={"Postnummer"} size="small"  ></TextInput>
                        </Box>
                        <Box>
                            <TextInput  {...register(`${enviroment}.${index}.email` as const)} disabled={hasAddress(index)} placeholder={"Epost"} size="small"  ></TextInput>
                        </Box>
                        <Box>
                            <TextInput {...register(`${enviroment}.${index}.amount` as const)} type="number" placeholder={"Antall"} size="small"  ></TextInput>
                        </Box>
                        <Box style={{ display: props.selectPartiton ? "none" : "inherit" }}>
                            <Select
                                {...register(`${enviroment}.${index}.partition` as const)}
                                options={partitions}
                                size="small"
                                alignSelf="start"
                                labelKey={(option) => ethers.utils.parseBytes32String(option)}
                                emptySearchMessage={"Foreslå en partisjon ovenfor"}
                                onChange={({ option }) => {
                                    setValue(`${enviroment}.${index}.partition`, option)
                                    return option
                                }}
                            ></Select>
                        </Box>
                        <Box style={{ display: props.multiple ? "inherit" : "none" }}>
                            <Button onClick={() => remove(index)} icon={<Trash color="red"></Trash>}></Button>
                        </Box>
                    </Grid>
                ))}

                <Box gap="small" alignSelf="end" direction="row-responsive" align="end">
                    {props.multiple &&
                        <Button color="black" label="Legg til person" onClick={() => append(defaultValues[enviroment])} style={{ borderRadius: "0px" }}></Button>
                    }
                    <Button color="black" label="Send inn" style={{ borderRadius: "0px" }} {...props.onSubmitButtonProps} onClick={() => handleOnSubmit()} ></Button>

                </Box>
            </Box>
        </Box >

    )
}