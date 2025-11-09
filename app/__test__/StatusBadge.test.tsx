import { render, screen } from "@testing-library/react";
import { StatusBadge } from "../components/StatusBadge";

describe("Componente de Status", () => {
  it("debe renderizar el estado correctamente", () => {
    render(<StatusBadge status="Alive" />);
    const badge = screen.getByText("Alive");

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveAttribute("role", "status");
  });

  it("debe renderizar el estado Dead correctamente", () => {
    render(<StatusBadge status="Dead" />);
    const badge = screen.getByText("Dead");

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveAttribute("role", "status");
  });

  it("debe renderizar el estado unknown correctamente", () => {
    render(<StatusBadge status="unknown" />);
    const badge = screen.getByText("unknown");

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveAttribute("role", "status");
  });

  it("debe aplicar el estilo por defecto para estados no reconocidos", () => {
    render(<StatusBadge status="RandomStatus" />);
    const badge = screen.getByText("RandomStatus");

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveAttribute("role", "status");
  });
});