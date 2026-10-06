namespace Amaac.Architecture.Tests;

public sealed class DependencyRulesTests
{
    [Fact]
    public void Domain_does_not_reference_other_solution_layers()
    {
        var solutionReferences = typeof(Amaac.Domain.AssemblyReference)
            .Assembly
            .GetReferencedAssemblies()
            .Where(assembly => assembly.Name?.StartsWith("Amaac.", StringComparison.Ordinal) is true)
            .Select(assembly => assembly.Name)
            .ToArray();

        Assert.Empty(solutionReferences);
    }
}
