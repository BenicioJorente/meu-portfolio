"use client";

import { useState } from "react";
import Link from "next/link";

interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: "income" | "outcome";
  category: string;
  date: string;
}

export default function Laboratorio() {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 1, description: "Freelance Web Design", amount: 3500, type: "income", category: "Desenvolvimento", date: "2026-06-15" },
    { id: 2, description: "Licença Adobe Cloud", amount: 124, type: "outcome", category: "Ferramentas", date: "2026-06-14" },
    { id: 3, description: "Consultoria Cypress E2E", amount: 2000, type: "income", category: "QA Automation", date: "2026-06-10" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<"income" | "outcome">("income");
  const [category, setCategory] = useState("Desenvolvimento");

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const totalOutcome = transactions
    .filter((t) => t.type === "outcome")
    .reduce((acc, t) => acc + t.amount, 0);

  const totalBalance = totalIncome - totalOutcome;

  const filteredTransactions = transactions.filter((t) =>
    t.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || !amount) return;

    const newTransaction: Transaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      type,
      category,
      date: new Date().toISOString().split("T")[0],
    };

    setTransactions([newTransaction, ...transactions]);
    setIsModalOpen(false);
    
    setDescription("");
    setAmount("");
    setType("income");
  };

  const handleDeleteTransaction = (id: number) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#050B1A] text-[#F8FAFC] font-sans pt-28 pb-12 selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 pb-6 border-b border-white/5">
          <div>
            <Link href="/" className="text-xs font-mono text-[#38BDF8] hover:underline mb-2 block">
              &larr; Voltar para o Portfólio
            </Link>
            <h1 className="text-3xl font-bold font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#38BDF8]">
              &lt;automation_playground /&gt;
            </h1>
            <p className="text-sm text-[#94A3B8] mt-1">
              Ambiente alvo projetado com identificadores <code className="text-emerald-400 font-mono">data-cy</code> para validação de testes E2E robustos no Cypress.
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            data-cy="btn-open-modal"
            className="px-5 py-3 rounded-xl bg-[#3B82F6] hover:bg-[#60A5FA] text-white font-mono text-sm transition-all shadow-lg shadow-blue-500/10"
          >
            + Nova Transação
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="p-6 rounded-2xl bg-[#0B1120]/50 border border-white/5 backdrop-blur-md">
            <span className="text-xs font-mono text-[#475569] block uppercase mb-1">// Entradas</span>
            <div data-cy="summary-income" className="text-2xl font-bold text-emerald-400">
              R$ {totalIncome.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-[#0B1120]/50 border border-white/5 backdrop-blur-md">
            <span className="text-xs font-mono text-[#475569] block uppercase mb-1">// Saídas</span>
            <div data-cy="summary-outcome" className="text-2xl font-bold text-rose-400">
              R$ {totalOutcome.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-[#0B1120]/50 border border-white/5 backdrop-blur-md">
            <span className="text-xs font-mono text-[#475569] block uppercase mb-1">// Saldo Atual</span>
            <div data-cy="summary-balance" className={`text-2xl font-bold ${totalBalance >= 0 ? "text-[#38BDF8]" : "text-rose-500"}`}>
              R$ {totalBalance.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </div>
          </div>
        </div>

        <div className="mb-6 max-w-md">
          <input
            type="text"
            placeholder="Filtrar transações por descrição..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            data-cy="input-search"
            className="w-full px-4 py-3 rounded-xl bg-[#0B1120]/70 border border-white/5 text-sm focus:outline-none focus:border-[#3B82F6] transition-colors font-mono placeholder-[#475569]"
          />
        </div>

        <div className="rounded-xl border border-white/5 bg-[#0B1120]/30 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse" data-cy="transactions-table">
              <thead>
                <tr className="border-b border-white/5 bg-[#0B1120]/80 font-mono text-xs text-[#475569]">
                  <th className="p-4 font-semibold uppercase">// Descrição</th>
                  <th className="p-4 font-semibold uppercase">// Valor</th>
                  <th className="p-4 font-semibold uppercase">// Categoria</th>
                  <th className="p-4 font-semibold uppercase">// Data</th>
                  <th className="p-4 font-semibold text-right uppercase">// Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm text-[#94A3B8]">
                {filteredTransactions.length === 0 ? (
                  <tr data-cy="empty-state">
                    <td colSpan={5} className="p-8 text-center text-xs font-mono text-[#475569]">
                      Nenhuma transação encontrada para o termo digitado.
                    </td>
                  </tr>
                ) : (
                  filteredTransactions.map((transaction) => (
                    <tr key={transaction.id} data-cy={`transaction-item-${transaction.id}`} className="hover:bg-white/[0.01] transition-colors">
                      <td className="p-4 font-medium text-[#F8FAFC]">{transaction.description}</td>
                      <td className={`p-4 font-mono font-semibold ${transaction.type === "income" ? "text-emerald-400" : "text-rose-400"}`}>
                        {transaction.type === "income" ? "+ " : "- "}R$ {transaction.amount.toFixed(2)}
                      </td>
                      <td className="p-4 font-mono text-xs"><span className="px-2.5 py-1 rounded bg-[#050B1A] border border-white/5">{transaction.category}</span></td>
                      <td className="p-4 font-mono text-xs">{transaction.date}</td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => handleDeleteTransaction(transaction.id)}
                          data-cy={`btn-delete-${transaction.id}`}
                          className="px-3 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white font-mono text-xs transition-all"
                        >
                          Excluir
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {isModalOpen && (
        <div data-cy="modal-overlay" className="fixed inset-0 z-150 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div data-cy="modal-content" className="w-full max-w-md rounded-2xl bg-[#0B1120] border border-white/10 overflow-hidden shadow-2xl">
            
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#050B1A]/40">
              <h3 className="font-mono text-sm font-bold text-[#F8FAFC]">// Cadastrar Transação</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                data-cy="btn-close-modal"
                className="text-[#475569] hover:text-[#F8FAFC] transition-colors text-lg"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleAddTransaction} className="p-6 flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono text-[#475569]">Descrição</label>
                <input
                  type="text"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  data-cy="input-description"
                  placeholder="Ex: Teclado Mecânico"
                  className="px-4 py-2.5 rounded-xl bg-[#050B1A] border border-white/5 text-sm focus:outline-none focus:border-[#3B82F6] transition-colors font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono text-[#475569]">Valor (R$)</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    data-cy="input-amount"
                    placeholder="0.00"
                    className="px-4 py-2.5 rounded-xl bg-[#050B1A] border border-white/5 text-sm focus:outline-none focus:border-[#3B82F6] transition-colors font-mono"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono text-[#475569]">Tipo</label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value as "income" | "outcome")}
                    data-cy="select-type"
                    className="px-4 py-2.5 rounded-xl bg-[#050B1A] border border-white/5 text-sm focus:outline-none focus:border-[#3B82F6] transition-colors font-mono text-[#94A3B8]"
                  >
                    <option value="income">Entrada</option>
                    <option value="outcome">Saída</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 mb-2">
                <label className="text-xs font-mono text-[#475569]">Categoria</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  data-cy="select-category"
                  className="px-4 py-2.5 rounded-xl bg-[#050B1A] border border-white/5 text-sm focus:outline-none focus:border-[#3B82F6] transition-colors font-mono text-[#94A3B8]"
                >
                  <option value="Desenvolvimento">Desenvolvimento</option>
                  <option value="QA Automation">QA Automation</option>
                  <option value="Ferramentas">Ferramentas</option>
                  <option value="Infraestrutura">Infraestrutura</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  data-cy="btn-cancel-transaction"
                  className="px-4 py-2 rounded-xl border border-white/5 text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  data-cy="btn-submit-transaction"
                  className="px-4 py-2 rounded-xl bg-[#3B82F6] hover:bg-[#60A5FA] text-white font-mono text-xs transition-all"
                >
                  Salvar
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </div>
  );
}