import { AddSpeciesModel, SpeciesModel } from "@/tools/definitions/species"
import { ApiResponse } from "@/tools/definitions/requests"
import { makeRequest } from "@/tools/browser/browser"
import { processErrors } from "@/tools/utils"

export function getSpecies(): Promise<ApiResponse<SpeciesModel[]>> {
	return makeRequest("/species", "GET")
}

export async function addSpecies(data: AddSpeciesModel): Promise<ApiResponse<unknown>> {
	const response = await makeRequest("/species", "POST", data)

	if (!response.wasSuccessful)
		response.errors = processErrors(response.errors)

	return response
}