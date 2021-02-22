using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace Core.DataModels.Characters
{
	[ExcludeFromCodeCoverage]
	public class Species
	{
		public int Id { get; set; }
		
		[Required]
		public string Name { get; set; }
		
		[Required]
		public string PluralName { get; set; }
		
		[Required]
		[MaxLength(500)]
		public string Description { get; set; }
		public bool ForceSensitive { get; set; }
		public float HpCoefficient { get; set; }
		
		public byte StrengthModifier { get; set; }
		public byte DexterityModifier { get; set; }
		public byte ConstitutionModifier { get; set; }
		public byte IntelligenceModifier { get; set; }
		public byte CharismaModifier { get; set; }
		public byte WisdomModifier { get; set; }
		public byte AwarenessModifier { get; set; }
	}
}