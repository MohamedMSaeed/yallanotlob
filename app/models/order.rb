class Order < ApplicationRecord
  belongs_to :user
  has_and_belongs_to_many :users

  validates :type, presence: true
  validates :resturant, presence: true

  after_initialize :set_defaults

  def set_defaults
    self.status ||= "w"
  end
end
