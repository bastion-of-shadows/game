using System.Threading.Tasks;
using Backend.Controllers;
using Backend.Tools;
using Core.ViewModels.Characters.Species;
using Microsoft.AspNetCore.Mvc;
using Tests.Mocks;
using Xunit;

namespace Tests.Backend.Controllers.SpeciesControllerTests
{
	public class AddSpecies
	{
		[Fact]
		public async Task ReturnsBadRequestIfAddSpeciesFails()
		{
			var speciesService = ServiceMockFactory.SpeciesService(successful: false);
			var controller = new SpeciesController(speciesService.Object);

			var response = await controller.AddSpecies(new AddSpeciesModel());

			Assert.IsType<UnprocessableEntityObjectResult>(response);

			var result = (response as UnprocessableEntityObjectResult)?.Value as ApiResponse;

			Assert.NotNull(result);
			Assert.Contains("General", result.Errors.Keys);
			Assert.Single(result.Errors["General"]);
			Assert.Equal("Mock this bad service result", result.Errors["General"][0]);
		}

		[Fact]
		public async Task ReturnsNoContentResultIfAddSpeciesSucceeds()
		{
			var speciesService = ServiceMockFactory.SpeciesService();
			var controller = new SpeciesController(speciesService.Object);

			var response = await controller.AddSpecies(new AddSpeciesModel());

			Assert.IsType<NoContentResult>(response);
		}
	}
}