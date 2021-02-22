using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace Core.ViewModels.Characters.Species
{
	[ExcludeFromCodeCoverage]
	public class EditSpeciesModel
	{
		[Required]
		public int Id { get; set; }

		[Required]
		public string Name { get; set; }

		[Required]
		public string PluralName { get; set; }

		[Required]
		[MaxLength(500)]
		public string Description { get; set; }
		public bool ForceSensitive { get; set; }
		public decimal HpCoefficient { get; set; }

		public int StrengthModifier { get; set; }
		public int DexterityModifier { get; set; }
		public int ConstitutionModifier { get; set; }
		public int IntelligenceModifier { get; set; }
		public int CharismaModifier { get; set; }
		public int WisdomModifier { get; set; }
		public int AwarenessModifier { get; set; }
	}
}