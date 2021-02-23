import * as React from "react"
import { Dispatch, SetStateAction, useState } from "react"
import { useHistory, useRouteMatch } from "react-router-dom"
import Form from "@/components/ui/forms/Form"
import { useFormInputValidation } from "@/hooks/forms"
import { required, requireLength } from "@/tools/validations"
import TextField from "@/components/ui/forms/fields/TextField"
import CheckField from "@/components/ui/forms/fields/CheckField"
import { addSpecies } from "@/tools/browser/species"

const Add: React.FunctionComponent = (): JSX.Element => {

	const history = useHistory()
	const { url } = useRouteMatch()

	const [errors, setErrors]: [string[], Dispatch<SetStateAction<string[]>>] = useState([])

	const name = useFormInputValidation<string>({
		initialValue: "",
		validators: [required]
	})
	const pluralName = useFormInputValidation<string>({
		initialValue: "",
		validators: [required]
	})
	const description = useFormInputValidation<string>({
		initialValue: "",
		validators: [required]
	})
	description.validators.push(input => requireLength(input, 0, 500))

	const forceSensitive = useFormInputValidation<boolean>({ initialValue: false })
	const hpCoefficient = useFormInputValidation<number|string>({
		initialValue: 10,
		validators: [required]
	})
	const strengthModifier = useFormInputValidation<number|string>({
		initialValue: 0,
		validators: [required]
	})
	const dexterityModifier = useFormInputValidation<number|string>({
		initialValue: 0,
		validators: [required]
	})
	const constitutionModifier = useFormInputValidation<number|string>({
		initialValue: 0,
		validators: [required]
	})
	const intelligenceModifier = useFormInputValidation<number|string>({
		initialValue: 0,
		validators: [required]
	})
	const charismaModifier = useFormInputValidation<number|string>({
		initialValue: 0,
		validators: [required]
	})
	const wisdomModifier = useFormInputValidation<number|string>({
		initialValue: 0,
		validators: [required]
	})
	const awarenessModifier = useFormInputValidation<number|string>({
		initialValue: 0,
		validators: [required]
	})

	const onSubmit = async () => {
		const response = await addSpecies({
			name: name.value,
			pluralName: pluralName.value,
			description: description.value,
			forceSensitive: forceSensitive.value,
			hpCoefficient: parseFloat(hpCoefficient.value as string),
			awarenessModifier: parseInt(awarenessModifier.value as string),
			charismaModifier: parseInt(charismaModifier.value as string),
			constitutionModifier: parseInt(constitutionModifier.value as string),
			dexterityModifier: parseInt(dexterityModifier.value as string),
			intelligenceModifier: parseInt(intelligenceModifier.value as string),
			strengthModifier: parseInt(strengthModifier.value as string),
			wisdomModifier: parseInt(wisdomModifier.value as string)
		})

		if (!response.wasSuccessful) {
			setErrors(response.errors["Unknown"])
		} else {
			history.push(`${url}/successful`)
		}

		return response.wasSuccessful
	}

	return (
		<Form
			handleSubmit={onSubmit}
			title="Add new species"
			showRecaptcha={false}
		>
			<TextField
				labelText="Species name"
				hint="The name of the species (e.g., Twi'lek)"
				value={name.value}
				setValue={name.setValue}
				errors={name.errors}
				validator={name.validator}
				required
			/>
			<TextField
				labelText="Species plural name"
				hint="The plural name of the species (e.g., Twi'leks)"
				value={pluralName.value}
				setValue={pluralName.setValue}
				errors={pluralName.errors}
				validator={pluralName.validator}
				required
			/>
			<TextField
				labelText="Description"
				value={description.value}
				setValue={description.setValue}
				errors={description.errors}
				validator={description.validator}
				required
			/>
			<TextField
				labelText="HP Coefficient"
				hint="The base modifier of the species' hit points"
				type="number"
				step={0.5}
				min={7.5}
				max={12.5}
				value={hpCoefficient.value}
				setValue={hpCoefficient.setValue}
				errors={hpCoefficient.errors}
				validator={hpCoefficient.validator}
				required
			/>
			<TextField
				labelText="Strength modifier"
				hint="The modifier for the Strength attribute"
				type="number"
				step={1}
				min={-2}
				max={2}
				value={strengthModifier.value}
				setValue={strengthModifier.setValue}
				errors={strengthModifier.errors}
				validator={strengthModifier.validator}
				required
			/>
			<TextField
				labelText="Dexterity modifier"
				hint="The modifier for the Dexterity attribute"
				type="number"
				step={1}
				min={-2}
				max={2}
				value={dexterityModifier.value}
				setValue={dexterityModifier.setValue}
				errors={dexterityModifier.errors}
				validator={dexterityModifier.validator}
				required
			/>
			<TextField
				labelText="Constitution modifier"
				hint="The modifier for the Constitution attribute"
				type="number"
				step={1}
				min={-2}
				max={2}
				value={constitutionModifier.value}
				setValue={constitutionModifier.setValue}
				errors={constitutionModifier.errors}
				validator={constitutionModifier.validator}
				required
			/>
			<TextField
				labelText="Intelligence modifier"
				hint="The modifier for the Intelligence attribute"
				type="number"
				step={1}
				min={-2}
				max={2}
				value={intelligenceModifier.value}
				setValue={intelligenceModifier.setValue}
				errors={intelligenceModifier.errors}
				validator={intelligenceModifier.validator}
				required
			/>
			<TextField
				labelText="Charisma modifier"
				hint="The modifier for the Charisma attribute"
				type="number"
				step={1}
				min={-2}
				max={2}
				value={charismaModifier.value}
				setValue={charismaModifier.setValue}
				errors={charismaModifier.errors}
				validator={charismaModifier.validator}
				required
			/>
			<TextField
				labelText="Wisdom modifier"
				hint="The modifier for the Wisdom attribute"
				type="number"
				step={1}
				min={-2}
				max={2}
				value={wisdomModifier.value}
				setValue={wisdomModifier.setValue}
				errors={wisdomModifier.errors}
				validator={wisdomModifier.validator}
				required
			/>
			<TextField
				labelText="Awareness modifier"
				hint="The modifier for the Awareness attribute"
				type="number"
				step={1}
				min={-2}
				max={2}
				value={awarenessModifier.value}
				setValue={awarenessModifier.setValue}
				errors={awarenessModifier.errors}
				validator={awarenessModifier.validator}
				required
			/>
			<CheckField
				labelText={"Force sensitive"}
				value={forceSensitive.value}
				setValue={forceSensitive.setValue}
			/>
		</Form>
	)
}

export default Add